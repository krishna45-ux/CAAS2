'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion,
} from 'framer-motion';
import {
  SplitText, Reveal, Stagger, StaggerItem, Magnetic, TiltCard, Parallax,
  VelocityMarquee, Counter, EASE,
} from '../motion';

const ARROW = (
  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const CHECK = (
  <svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* ---------- Marquee: drifts on its own, surges with the scroll ---------- */

const TAGS = ['Social Media', 'Product & Retail', 'Real Estate', 'Events', 'Corporate', 'Hospitality', 'Brand Films', 'Influencer'];

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <VelocityMarquee baseVelocity={2.2} repeat={2}>
        {TAGS.map((t) => <span key={t}>{t}</span>)}
      </VelocityMarquee>
    </div>
  );
}

/* ---------- Statement ---------- */

export function Statement() {
  return (
    <section className="section statement wrap">
      <SplitText
        as="h2"
        className="statement__h"
        text={'Not Just Camera,\na Cameraman …'}
        stagger={0.06}
        duration={0.95}
      />
      <Reveal dir="up" delay={0.18}>
        <div className="lead-card">
          <span className="lead-card__bar" aria-hidden="true" />
          <b>CAAS (Cameraman as a Service)</b> connects businesses, creators, influencers and brands with professional cameramen on demand. From social media content, influencer and personal-brand shoots to product, business, real-estate and event coverage — you book the right cameraman for exactly what you need. Starting at <span className="price-chip">₹3,500 for a 3-hour shoot</span>, with flexible additional hours and production requirements based on the project.
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Where we shoot ---------- */

const SHOOTS = [
  { img: '/images/home_studio.jpg', alt: 'Cameraman filming social-media content in a studio', title: 'Social Media Content', meta: 'f/2.0 · 35mm' },
  { img: '/images/home_event.jpg', alt: 'Crew covering an outdoor event', title: 'Events & Exhibitions', meta: 'f/2.8 · 24mm' },
  { img: '/images/home_corporate.jpg', alt: 'Corporate team on a real-estate shoot', title: 'Real Estate & Infra', meta: 'f/4.0 · 16mm' },
];

export function Shoot() {
  return (
    <section className="section wrap shoot" id="shoot">
      <div className="head head--center">
        <span className="eyebrow eyebrow--center">Usually where we shoot</span>
        <SplitText as="h2" className="h-section" text="Usually Where We Shoot" highlight={['shoot']} highlightClass="u-blue" />
        <Reveal dir="up" delay={0.12}>
          <p className="lead-txt">Our crew is ready to deploy across a range of real-world scenarios and environments — no brief too big or too small.</p>
        </Reveal>
      </div>

      <Stagger className="shoot__grid" gap={0.11}>
        {SHOOTS.map((s) => (
          <StaggerItem key={s.title} dir="up">
            {/* tilt tracks the actual cursor instead of one canned hover angle */}
            <TiltCard className="shoot-card" max={8} lift={-10}>
              <img className="shot" src={s.img} alt={s.alt} loading="lazy" />
              <span className="shoot-card__scrim" aria-hidden="true" />
              <div className="shoot-card__caption">
                <b>{s.title}</b><span>{s.meta}</span>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------- Crew ---------- */

export function Crew() {
  return (
    <section className="section wrap crew">
      <div className="crew__top">
        <Reveal dir="left">
          <p className="note">
            We are nothing without them. They&rsquo;re the reason clients return, deadlines are met, and every story is captured with excellence.
            <span className="who">— The CAAS promise</span>
          </p>
        </Reveal>
        <div className="crew__cta">
          <Reveal dir="right"><span className="eyebrow">The professionals</span></Reveal>
          <SplitText as="h2" className="h-section" text="Meet the SarCAAStic Crew" highlight={['sarcaastic']} highlightClass="u-blue" />
          <Reveal dir="up" delay={0.16}>
            <Magnetic strength={0.22}>
              <a href="#stories" className="btn btn--primary btn--lg">They&rsquo;re waiting to capture{ARROW}</a>
            </Magnetic>
          </Reveal>
          <Reveal dir="up" delay={0.24}>
            <p className="crew__note">Vetted specialists. No hobbyists. No weddings. Just high-end production units.</p>
          </Reveal>
        </div>
      </div>

      <Reveal dir="up" className="crew__band">
        <img className="crew__band-img" src="/images/sarcastic_crew_2.png" alt="The SarCAASstic crew on location" loading="lazy" />
      </Reveal>
    </section>
  );
}

/* ---------- Fun fact ---------- */

export function FunFact() {
  return (
    <div className="funfact wrap">
      <Reveal dir="scale" className="funfact__inner">
        <span className="funfact__glow" aria-hidden="true" />
        <div className="funfact__tag">FUN FACT</div>
        <h3>You don&rsquo;t need to know what kind of shoot you need.</h3>
        <strong>THAT&rsquo;S OUR JOB.</strong>
      </Reveal>
    </div>
  );
}

/* ---------- Portfolio ---------- */

const STILLS = [
  { img: '/images/ind_camera_rig.jpg', alt: 'Cinema prime lens detail', cap: 'STILL 01 · f/2.8', drift: 34 },
  { img: '/images/blog_lighting.jpg', alt: 'Golden-hour silhouette shoot', cap: 'STILL 02 · f/1.8', drift: -22 },
  { img: '/images/storyteller.jpg', alt: 'Studio storyteller in frame', cap: 'STILL 03 · f/4.0', drift: 26 },
  { img: '/images/blog_wedding.jpg', alt: 'Outdoor event coverage', cap: 'STILL 04 · f/2.0', drift: -30 },
  { img: '/images/blog_corporate.jpg', alt: 'Corporate team on set', cap: 'STILL 05 · f/2.8', drift: 20 },
  { img: '/images/hero_poster.jpg', alt: 'Frame from a recent brand film', cap: 'STILL 06 · f/5.6', drift: -26 },
];

export function Portfolio() {
  return (
    <section className="section wrap portfolio" id="portfolio">
      <div className="head">
        <span className="eyebrow">Fresh from the field</span>
        <SplitText as="h2" className="h-section" text={'Our Latest Appearance,\nFresh From the Field'} highlight={['field']} highlightClass="u-blue" stagger={0.038} />
        <Reveal dir="up" delay={0.12}>
          <p className="lead-txt">A living feed of our most recent work — straight off the memory card.</p>
        </Reveal>
      </div>

      <div className="portfolio__grid">
        {STILLS.map((s, i) => (
          // each still drifts at its own rate, so the grid breathes
          <Parallax key={s.cap} distance={s.drift} className="pf-slot">
            <Reveal dir="up" delay={(i % 3) * 0.07}>
              <figure className="pf">
                <img className="shot" src={s.img} alt={s.alt} loading="lazy" />
                <span className="pf__scrim" aria-hidden="true" />
                <figcaption className="pf__cap">{s.cap}</figcaption>
              </figure>
            </Reveal>
          </Parallax>
        ))}

        <Reveal dir="up" delay={0.14} className="portfolio__more">
          <h3>Wanna See More ???</h3>
          <Magnetic strength={0.24}>
            <Link href="/portfolio" className="btn btn--primary btn--lg">Check Out Our Portfolio{ARROW}</Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */

const INCLUDES = [
  'Professional cameraman & crew',
  '3-hour production shoot',
  'Cinema-grade kit & lighting',
  'Raw + edited deliverables',
  'Fully vetted & insured',
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 140, damping: 22 });
  const sy = useSpring(my, { stiffness: 140, damping: 22 });
  const gx = useTransform(sx, (v) => `${v}%`);
  const gy = useTransform(sy, (v) => `${v}%`);

  return (
    <section className="section wrap pricing" id="pricing">
      <Reveal dir="up">
        <motion.div
          ref={ref}
          className="pricing__card"
          style={reduce ? undefined : { ['--px' as string]: gx, ['--py' as string]: gy }}
          onPointerMove={(e) => {
            if (e.pointerType !== 'mouse' || !ref.current) return;
            const r = ref.current.getBoundingClientRect();
            mx.set(((e.clientX - r.left) / r.width) * 100);
            my.set(((e.clientY - r.top) / r.height) * 100);
          }}
          onPointerLeave={() => { mx.set(50); my.set(50); }}
        >
          <span className="pricing__spot" aria-hidden="true" />
          <span className="pricing__badge">The package</span>

          <div className="pricing__left">
            <div className="pricing__price">
              <span className="pricing__cur">₹</span>
              <Counter to={3500} />
            </div>
            <div className="pricing__rate">Base rate · 3-hour session</div>
            <p className="pricing__quote">&ldquo;Whether it&rsquo;s a one-off drop or a monthly retainer — one crew, one price, zero drama.&rdquo;</p>
          </div>

          <div className="pricing__right">
            <Stagger className="pricing__list" gap={0.07} as="ul">
              {INCLUDES.map((li) => (
                <StaggerItem key={li} as="li" dir="up">{CHECK}{li}</StaggerItem>
              ))}
            </Stagger>
            <div className="pricing__cta-row">
              <Magnetic strength={0.22}>
                <a href="/book" className="btn btn--primary btn--lg">Yes, that&rsquo;s what I&rsquo;m looking for{ARROW}</a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

/* ---------- Monthly ---------- */

export function Monthly() {
  return (
    <section className="section monthly wrap">
      <Reveal dir="up" className="monthly__card">
        <span className="monthly__grid-bg" aria-hidden="true" />
        <div className="monthly__ey">Need shoots every month?</div>
        <h3>We&rsquo;ve already planned for this.</h3>
        <p>Whether you&rsquo;re managing 3 brands or 30, our monthly production plans make sure you always have a professional crew ready — exactly when your content calendar demands it.</p>
      </Reveal>
    </section>
  );
}

/* ---------- Final CTA ---------- */

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const glow = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const lift = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section className="section final wrap" ref={ref}>
      <motion.span className="final__glow" aria-hidden="true"
        style={reduce ? undefined : { opacity: glow, y: lift }} />
      <SplitText as="h2" className="final__h" text={'Ready to Capture\nPrecision?'} highlight={['precision?']} highlightClass="u-blue" stagger={0.055} duration={0.95} />
      <Reveal dir="up" delay={0.16}>
        <p>Join 500+ brands using CAAS to produce high-end content at scale. No arguments, no complicated quotes — just results.</p>
      </Reveal>
      <Reveal dir="up" delay={0.24}>
        <div className="final__row">
          <Magnetic strength={0.3}><Link href="/book" className="btn btn--primary btn--lg">Get Started{ARROW}</Link></Magnetic>
          <Magnetic strength={0.22}><Link href="/pricing" className="btn btn--ghost btn--lg">View Pricing</Link></Magnetic>
        </div>
      </Reveal>
      <Reveal dir="up" delay={0.32}>
        <p className="final__small">Available across 12 cities · Book in under 60 seconds</p>
      </Reveal>
    </section>
  );
}
