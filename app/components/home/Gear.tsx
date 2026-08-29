'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { SplitText, Reveal, Magnetic, EASE } from '../motion';

const KIT = [
  { n: '01', title: 'Cinema-grade 4K/6K Cameras', sub: 'RED, Sony & Canon bodies' },
  { n: '02', title: 'Prime & Zoom Lenses', sub: '35mm · 50mm · 85mm & beyond' },
  { n: '03', title: 'Motion & Anti-shake Systems', sub: 'Pro gimbals & stabilisers' },
  { n: '04', title: 'Lightweight RGB Lighting', sub: 'Full studio rigs, on location' },
  { n: '05', title: 'Broadcast Audio & Recording', sub: 'Clean sound, every take' },
];

export default function Gear() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // the lens barrel turns as the section passes — like racking a focus ring
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [-32, 32]), {
    stiffness: 70, damping: 22, mass: 0.8,
  });
  const ringRotate = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 60, damping: 24,
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="section dark gear-section" ref={ref}>
      <motion.img className="gear__bg" src="/images/ind_cinema.jpg" alt="" aria-hidden="true"
        loading="lazy" style={reduce ? undefined : { y: bgY }} />

      <div className="wrap gear__grid">
        <div className="gear__txt">
          <Reveal dir="up"><span className="eyebrow">The equipment</span></Reveal>
          <SplitText as="h2" className="h-section" text={'What Our\nTeam Carries.'} highlight={['carries.']} highlightClass="u-blue" />
          <Reveal dir="up" delay={0.14}>
            <p className="lead-txt">Precision tools for precision results. We never compromise on gear, glass or stabilisation — every unit ships with our advanced cinema-grade kit.</p>
          </Reveal>

          <motion.ul className="gear__list"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-15% 0px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.075, delayChildren: 0.1 } } }}>
            {KIT.map((k) => (
              <motion.li key={k.n}
                variants={reduce
                  ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                  : { hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.6, ease: EASE }}>
                <span className="n">{k.n}</span>
                <span><b>{k.title}</b><span>{k.sub}</span></span>
                <span className="gear__list-rule" aria-hidden="true" />
              </motion.li>
            ))}
          </motion.ul>

          <Reveal dir="up" delay={0.1}>
            <Magnetic strength={0.22}>
              <a href="#pricing" className="btn btn--primary">
                &amp; expertise to deliver the best
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="gear__pic">
          <motion.div className="gear__ring" aria-hidden="true"
            style={reduce ? undefined : { rotate: ringRotate }} />
          <motion.div
            className="gear__circle"
            initial={reduce ? undefined : { opacity: 0, scale: 0.82 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.9, ease: EASE }}
            style={reduce ? undefined : { rotate }}
          >
            <img className="shot" src="/images/gear_2.png" alt="Cinema-grade gear layout" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
