'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Magnetic, Reveal, EASE } from './motion';

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { href: '/services', label: 'Services' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { href: '/knowledge-centre', label: 'Knowledge Centre' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
];

const SOCIALS = [
  { label: 'Instagram', path: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></> },
  { label: 'X', path: <path d="M17.5 3h3l-6.6 7.5L21.5 21h-5.9l-4.1-5.4L6.6 21H3.5l7-8L2.9 3h6l3.7 4.9zm-1 16h1.6L8.1 4.6H6.4z" fill="currentColor" /> },
  { label: 'LinkedIn', path: <path d="M6 9v10H3V9zm-1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM9 9h3v1.5c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.5V19h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9z" fill="currentColor" /> },
  { label: 'YouTube', path: <><rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.6" /><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" /></> },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });

  // the wordmark rises and fills with blue as the page bottoms out
  const markY = useTransform(scrollYProgress, [0, 1], ['26%', '0%']);
  const markFill = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  return (
    <footer className="footer" ref={ref}>
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brandcol">
            <Link href="/" className="brand" aria-label="CAAS home">
              <img src="/images/logo_ondark.png" alt="CAAS logo" className="footer__logo" />
            </Link>
            <p className="footer__pitch">
              Book a vetted professional cameraman on demand — one crew, one price, anywhere in the country.
            </p>
            <Magnetic strength={0.22}>
              <Link href="/book" className="btn btn--primary footer__cta">
                Book a Shoot
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </Magnetic>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {COLUMNS.map((col) => (
              <div className="footer__col" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>
                        <span>{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer__col">
              <h4>Reach Us</h4>
              <ul>
                <li><span style={{ color: 'var(--muted)' }}>Sector 51, Gurgaon</span></li>
                <li><a href="tel:+919711684074"><span>+91 9711684074</span></a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__social-row">
          <span className="footer__social-label">Follow the crew</span>
          <div className="footer__social">
            {SOCIALS.map((s) => (
              <Magnetic key={s.label} strength={0.35}>
                <a href="#" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" fill="none">{s.path}</svg>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      {/* oversized wordmark that resolves as you reach the bottom */}
      <div className="wordmark" aria-hidden="true">
        <motion.b style={reduce ? undefined : { y: markY }}>
          CAAS
          <motion.span className="wordmark__fill" style={reduce ? undefined : { opacity: markFill }}>CAAS</motion.span>
        </motion.b>
      </div>

      <div className="wrap">
        <div className="footer__copy">
          <span>© 2026 CAAS — Cameraman as a Service. All rights reserved.</span>
          <span>
            Made with 🔥 by{' '}
            <a href="https://labs.theangaarbatch.in/" target="_blank" rel="noopener noreferrer">The Angaar Labs</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
