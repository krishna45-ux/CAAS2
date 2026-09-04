'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { SplitText, Reveal, EASE } from '../motion';

const ROWS = [
  {
    num: '01 — Creators',
    title: 'Brands, Creators & Social Media',
    body: 'Built for businesses and individuals who create content consistently and need a crew that keeps up.',
    img: '/images/home_creator.jpg',
    alt: 'Creator filming branded content',
  },
  {
    num: '02 — Commerce',
    title: 'Products, Retail & Hospitality',
    body: 'Everything a customer should feel about you before they ever visit or buy.',
    img: '/images/ind_product.jpg',
    alt: 'Close-up product photography with a cinema lens',
  },
  {
    num: '03 — Enterprise',
    title: 'Corporate, Manufacturing & Industrial',
    body: 'Professional storytelling for businesses that build, manufacture and operate at scale.',
    img: '/images/blog_corporate.jpg',
    alt: 'Corporate team being filmed at the office',
  },
  {
    num: '04 — Spaces',
    title: 'Properties, Spaces & Experiences',
    body: 'Made for businesses where the space itself is the product worth showing off.',
    img: '/images/blog_wedding.jpg',
    alt: 'Wide capture of an event space',
  },
];

function Row({ row, i, onActive }: { row: typeof ROWS[number]; i: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  useEffect(() => { if (inView) onActive(i); }, [inView, i, onActive]);

  return (
    <article ref={ref} className={`ind-row ${inView ? 'is-active' : ''}`}>
      <span className="ind-row__rule" aria-hidden="true" />
      <div className="ind-row__txt">
        <Reveal dir="down" duration={0.6}>
          <span className="ind-row__num">{row.num}</span>
        </Reveal>
        <SplitText as="h3" text={row.title} stagger={0.03} duration={0.7} />
        <Reveal dir="up" delay={0.12}><p>{row.body}</p></Reveal>
      </div>
      {/* the image only rides along inside each row on small screens */}
      <div className="ind-row__pic ind-row__pic--inline">
        <img className="shot" src={row.img} alt={row.alt} loading="lazy" />
      </div>
    </article>
  );
}

export default function Industries() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="section wrap industries" id="industries">
      <div className="head">
        <span className="eyebrow">Industries</span>
        <SplitText as="h2" className="h-section" text="Industries We Serve" />
        <Reveal dir="up" delay={0.12}>
          <p className="lead-txt">Deep expertise, translated into the unique visual language of your business.</p>
        </Reveal>
      </div>

      <div className="ind">
        <div className="ind__rows">
          {ROWS.map((r, i) => (
            <Row key={r.num} row={r} i={i} onActive={setActive} />
          ))}
        </div>

        {/* one pinned frame; the footage inside it cuts as you read */}
        <div className="ind__stage" aria-hidden="true">
          <div className="ind__frame" style={{ transform: 'scale(0.8)', border: '4px solid white', borderRadius: '12px', overflow: 'hidden' }}>
            <AnimatePresence initial={false}>
              <motion.img
                key={ROWS[active].img}
                src={ROWS[active].img}
                alt=""
                className="ind__frame-img"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.12, filter: 'blur(14px)' }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                transition={{ duration: 0.75, ease: EASE }}
              />
            </AnimatePresence>
            <div className="flash-overlay"></div>
            <span className="ind__frame-hud">
              {String(active + 1).padStart(2, '0')} / {String(ROWS.length).padStart(2, '0')}
            </span>
            <span className="ind__frame-c tl" /><span className="ind__frame-c tr" />
            <span className="ind__frame-c bl" /><span className="ind__frame-c br" />
          </div>
        </div>
      </div>
      <div className="ind__cta" style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="/book" className="btn btn--primary btn--lg" style={{ backgroundColor: '#f03e3e', color: 'white', padding: '16px 40px', fontSize: '1.2em' }}>Book a Shoot</a>
      </div>
    </section>
  );
}
