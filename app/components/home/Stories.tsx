'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { SplitText, Reveal } from '../motion';

const STORIES = [
  {
    name: '01 — THE "ONE LAST SHOT"',
    slate: "We don't pack up until the story is told.",
    quote: '“One last shot.” Said at 5:40 PM. We were still shooting at 8:15. Somewhere between the 11th “last shot” and the 14th, the client stopped being the client and started roasting us for still having energy. Punchline: That’s when you know the shoot went well.',
    img: '/images/Real life img/set stories 1.png',
    alt: 'One last shot',
  },
  {
    name: '02 — THE CAMERA SHY CLIENT',
    slate: 'Direction is 80% psychology, 20% framing.',
    quote: '“I’m really awkward on camera.” First take: awkward. Second take: nervous. Third take: everyone started laughing. By take seven, the client was improvising better than the script. Punchline: The camera stopped feeling like a camera. That’s the real win.',
    img: '/images/Real life img/set stories 2.png',
    alt: 'Camera shy client',
  },
  {
    name: '03 — WHEN EVERYTHING GOES WRONG',
    slate: 'Bad weather is just good lighting in disguise.',
    quote: 'Battery: 3%. Memory card: full. Weather: changed its mind. Client: “Can we still get the shot?” Somehow, everyone jumped in. Someone found a charger. Someone held the reflector. Someone ordered chai. Punchline: The shot worked. The chaos became the story.',
    img: '/images/Real life img/set stories 3.png',
    alt: 'When everything goes wrong',
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
