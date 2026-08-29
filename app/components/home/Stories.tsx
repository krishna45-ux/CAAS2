'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { SplitText, Reveal } from '../motion';

const STORIES = [
  {
    name: 'Priya · Brand Lead',
    slate: 'ON SET / 01',
    quote: '"The CAAS crew turned up fully organised — I didn’t have to babysit a thing. One shift, full setup, cleanup and capture, handled."',
    img: '/images/home_priya.jpg',
    alt: "Priya's brand shoot on set",
  },
  {
    name: 'Arjun · NGO Launch',
    slate: 'ON SET / 02',
    quote: '"The rig they brought for our launch was insane — RED Komodo, the works. The final cut looks like it belongs on Netflix."',
    img: '/images/home_ngo.jpg',
    alt: 'Cinematic lighting on the NGO launch shoot',
  },
  {
    name: 'Meera · Real Estate',
    slate: 'ON SET / 03',
    quote: '"I used to underestimate turnaround. Booked at noon, had the high-res edit the same evening. The result? Priceless."',
    img: '/images/kc_real_estate.jpg',
    alt: 'Real-estate property capture',
  },
];

function StoryCard({
  story, i, total, progress, reduce,
}: {
  story: typeof STORIES[number];
  i: number; total: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  // each card shrinks and dims exactly as much as the number of cards
  // still to land on top of it
  const startAt = i / total;
  const scale = useTransform(progress, [startAt, 1], [1, 1 - (total - 1 - i) * 0.045]);
  const dim = useTransform(progress, [startAt, 1], [0, (total - 1 - i) * 0.28]);

  return (
    <div className="story-slot" style={{ top: `calc(13vh + ${i * 22}px)`, zIndex: i + 1 }}>
      <motion.article
        className="story"
        style={reduce ? undefined : { scale, transformOrigin: 'center top' }}
        initial={reduce ? undefined : { opacity: 0, y: 70 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="story__body">
          <div className="story__label">
            <b>{story.name}</b>
            <span>{story.slate}</span>
          </div>
          <p>{story.quote}</p>
        </div>
        <div className="story__pic">
          <img className="shot" src={story.img} alt={story.alt} loading="lazy" />
        </div>
        {!reduce && <motion.span className="story__dim" style={{ opacity: dim }} aria-hidden="true" />}
      </motion.article>
    </div>
  );
}

export default function Stories() {
  const reduce = useReducedMotion();
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="section dark stories" id="stories">
      <div className="wrap">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center">The chronicle</span>
          <SplitText as="h2" className="h-section" text={'Real Life Stories on Set'} highlight={['stories']} highlightClass="u-blue" />
          <Reveal dir="up" delay={0.12}>
            <p className="lead-txt">Ones who pay off well to our efforts. Our biggest strength was never the cameras — it&rsquo;s the people behind them.</p>
          </Reveal>
        </div>

        {/* cards physically stack on top of one another as you scroll */}
        <div className="stories__stack" ref={stackRef}>
          {STORIES.map((s, i) => (
            <StoryCard key={s.name} story={s} i={i} total={STORIES.length}
              progress={scrollYProgress} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}
