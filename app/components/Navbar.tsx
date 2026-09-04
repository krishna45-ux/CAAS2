'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { Magnetic, EASE } from './motion';

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Contact Us' },
  {
    href: '/knowledge-centre',
    label: 'Knowledge Centre',
    dropdown: [
      { href: '/blog', label: 'Blogs' },
      { href: '/knowledge-centre/guides', label: 'Guides' },
      { href: '/knowledge-centre/case-studies', label: 'Case Studies' },
      { href: '/knowledge-centre/news-trends', label: 'News & Trends' },
    ],
  },
];

export default function Navbar() {
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 320, damping: 42, restDelta: 0.0005 });

  useMotionValueEvent(scrollYProgress, 'change', () => {
    setIsNavStuck(window.scrollY > 24);
  });

  useEffect(() => {
    setIsNavStuck(window.scrollY > 24);
    const onScroll = () => setIsNavStuck(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock the page while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isNavOpen]);

  useEffect(() => { setIsNavOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsNavOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isHomePage = pathname === '/';
  const isStatic = !isHomePage;

  /* Each page declares the tone of its own hero via data-nav on its root, so
     the nav can never drift out of sync when a hero changes. Read it after
     the route paints; assume light until we know. */
  const [heroTone, setHeroTone] = useState<'dark' | 'light'>(isHomePage ? 'dark' : 'light');
  useEffect(() => {
    const read = () => {
      const el = document.querySelector('[data-nav]');
      const tone = el?.getAttribute('data-nav');
      setHeroTone(tone === 'dark' ? 'dark' : 'light');
    };
    read();
    // the new route's markup can land a frame after the pathname changes
    const t = setTimeout(read, 60);
    return () => clearTimeout(t);
  }, [pathname]);

  const isDarkStatic = heroTone === 'dark';
  // "over media" = white type sitting on a photo/video rather than on paper
  const overMedia = isDarkStatic && !isNavStuck;

  const close = () => setHovered(null);

  return (
    <>
      <motion.div className="scrubber" style={{ scaleX: progress }} aria-hidden="true" />

      <header
        ref={navRef}
        className={[
          'nav',
          isNavStuck ? 'is-stuck' : '',
          isNavOpen ? 'is-open' : '',
          overMedia ? 'is-over' : 'is-on-paper',
          isDarkStatic ? 'is-dark-static' : isStatic ? 'is-static' : '',
        ].filter(Boolean).join(' ')}
        id="nav"
      >
        <div className="nav__pill">
          <Link href="/" className="brand" aria-label="CAAS — home">
            <img src="/images/nav_logo.png" className="brand__logo" alt="" width="776" height="236" />
          </Link>

          <nav className="nav__links" aria-label="Primary" onMouseLeave={() => setHovered(null)}>
            {LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <div
                  key={l.href}
                  className="nav__item"
                  onMouseEnter={() => setHovered(l.href)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ position: 'relative' }}
                >
                  <Link
                    href={l.href}
                    className={`nav__link ${active ? 'is-active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {/* the blue pill slides between items instead of fading in place */}
                    {hovered === l.href && (
                      <motion.span
                        layoutId="nav-hover"
                        className="nav__link-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="nav__link-txt">
                      {l.label}
                      {l.dropdown && (
                        <svg style={{ width: 10, height: 10, marginLeft: 4, display: 'inline', verticalAlign: 'middle', transition: 'transform 0.2s', transform: hovered === l.href ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </span>
                    {active && <motion.span layoutId="nav-active" className="nav__link-dot" />}
                  </Link>

                  {/* Dropdown */}
                  {l.dropdown && hovered === l.href && (
                    <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '16px', zIndex: 50 }}>
                      <motion.div
                        className="nav__dropdown"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          background: 'rgba(17, 23, 39, 0.95)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '16px',
                          padding: '8px',
                          minWidth: '200px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}
                      >
                        {l.dropdown.map(drop => (
                          <Link 
                            key={drop.href} 
                            href={drop.href}
                            className="nav__dropdown-item"
                            style={{
                              padding: '10px 16px',
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              borderRadius: '8px',
                              transition: 'all 0.2s ease',
                              textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                              e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                            }}
                          >
                            {drop.label}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="nav__right">
            <span className="nav__tc" aria-hidden="true">
              <span className="rec" /> LIVE
            </span>
            <Magnetic strength={0.22}>
              <Link href="/book" className="btn btn--primary nav__cta">Book a Shoot</Link>
            </Magnetic>
          </div>

          <button
            className="nav__burger"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isNavOpen}
            aria-controls="nav-sheet"
            onClick={() => setIsNavOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {/* ---- mobile sheet: full-bleed, oversized type, staggered ---- */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            id="nav-sheet"
            className="nav-sheet"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav className="nav-sheet__links" aria-label="Mobile">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                  transition={{ delay: 0.16 + i * 0.055, duration: 0.55, ease: EASE }}
                >
                  <Link href={l.href} onClick={() => setIsNavOpen(false)}>
                    <em>{String(i + 1).padStart(2, '0')}</em>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="nav-sheet__foot"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
            >
              <Link href="/book" className="btn btn--primary btn--lg" onClick={() => setIsNavOpen(false)}>
                Book a Shoot →
              </Link>
              <Link href="/contact" className="nav-sheet__sec" onClick={() => setIsNavOpen(false)}>Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
