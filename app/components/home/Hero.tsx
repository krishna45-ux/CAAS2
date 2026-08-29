'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { SplitText, Magnetic, EASE } from '../motion';

const FEATURES = [
  {
    title: 'Verified Professionals',
    sub: 'Trusted by thousands',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
  {
    title: 'Easy Booking',
    sub: 'Quick & hassle-free',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
    ),
  },
  {
    title: 'Secure & Reliable',
    sub: 'Quality you can trust',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
];

const pad = (n: number) => (n < 10 ? '0' : '') + n;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [tcode, setTcode] = useState('00:00:00:00');
  // the hero is position:sticky, and useScroll cannot measure a pinned
  // element — its rect stops moving. Drive everything off absolute scroll
  // distance across one viewport height instead.
  const [vh, setVh] = useState(900);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const set = () => setVh(window.innerHeight);
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setCovered(v > vh * 0.98));

  // the frame pushes in and darkens as the page climbs over it
  const mediaScale = useTransform(scrollY, [0, vh], [1, 1.16]);
  const scrimOpacity = useTransform(scrollY, [0, vh], [0, 0.72]);
  const copyY = useTransform(scrollY, [0, vh], [0, -110]);
  const copyOpacity = useTransform(scrollY, [0, vh * 0.62], [1, 0]);
  const hudOpacity = useTransform(scrollY, [0, vh * 0.35], [1, 0]);

  // running timecode — the page presents itself as a live camera feed
  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const total = Math.floor(((t - start) / 1000) * 24);
      const f = total % 24;
      const sec = Math.floor(total / 24) % 60;
      const min = Math.floor(total / (24 * 60)) % 60;
      const hr = Math.floor(total / (24 * 3600)) % 24;
      setTcode(`${pad(hr)}:${pad(min)}:${pad(sec)}:${pad(f)}`);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduce]);

  // the hero stays pinned for the whole page, so stop decoding the video
  // (and drop the layer entirely) once the body has covered it
  const desktopVid = useRef<HTMLVideoElement>(null);
  const mobileVid = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    [desktopVid.current, mobileVid.current].forEach((v) => {
      if (!v) return;
      if (covered) v.pause();
      else { const p = v.play(); if (p) p.catch(() => {}); }
    });
  }, [covered]);

  return (
    <section className={`hero ${covered ? 'is-covered' : ''}`} ref={ref}>
      <motion.div className="hero__media" style={reduce ? undefined : { scale: mediaScale }}>
        <video ref={desktopVid} src="/Video/Hero_video.mp4" poster="/images/hero_video_poster.png"
          autoPlay loop muted playsInline className="hero__bg desktop-video" />
        <video ref={mobileVid} src="/Video/Hero_mobile.mp4" poster="/images/hero_mobile_poster.png"
          autoPlay loop muted playsInline className="hero__bg mobile-video" />
      </motion.div>

      {/* legibility gradient, then a scroll-driven darkening pass on top */}
      <div className="hero__grade" aria-hidden="true" />
      <motion.div className="hero__scrim" style={{ opacity: scrimOpacity }} aria-hidden="true" />

      {/* viewfinder HUD */}
      <motion.div className="hero__hud" style={{ opacity: hudOpacity }} aria-hidden="true">
        <span className="hero__hud-c tl" /><span className="hero__hud-c tr" />
        <span className="hero__hud-c bl" /><span className="hero__hud-c br" />
        <div className="hero__tc">
          <span className="rec" /> REC <b>{tcode}</b>
        </div>
      </motion.div>

      <motion.div className="hero__inner" style={{ y: copyY, opacity: copyOpacity }}>
        <div className="hero__copy">
          <motion.span className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}>
            — GET THE MOMENT
          </motion.span>

          <SplitText
            as="h1"
            className="hero__title"
            text={'Find the right\nperson to capture\nyour moment.'}
            highlight={['capture']}
            highlightClass="u-blue"
            delay={0.25}
            stagger={0.05}
          />

          <motion.p className="hero__sub"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.75, ease: EASE }}>
            Discover talented photographers and videographers for weddings, parties, corporate events, celebrations, concerts and more.
          </motion.p>

          <motion.div className="hero__cta"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.75, ease: EASE }}>
            <Magnetic strength={0.3}>
              <Link href="/book" className="btn btn--primary btn--lg">
                Book a Shoot
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <div className="hero__bottom-row">
          <div className="hero__features">
            {FEATURES.map((f, i) => (
              <motion.div className="feature" key={f.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.98 + i * 0.09, duration: 0.7, ease: EASE }}>
                <span className="feature__icon">{f.icon}</span>
                <div><b>{f.title}</b><p>{f.sub}</p></div>
              </motion.div>
            ))}
          </div>

          <motion.div className="hero__scroll" aria-hidden="true"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.8 }}>
            <span className="hero__scroll-txt">SCROLL</span>
            <span className="hero__scroll-rail"><motion.span className="hero__scroll-dot"
              animate={reduce ? {} : { y: [0, 26, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} /></span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
