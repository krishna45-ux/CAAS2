'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SplitText, Reveal, Parallax, EASE } from '../motion';

const WARN = (
  <svg className="ic" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.6" /></svg>
);
const CHECK = (
  <svg className="ic" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const THREAD = [
  { side: 'q', tag: 'Pricing pain', text: '"Freelancers take weeks to quote — and even longer to deliver."' },
  { side: 'a', tag: 'CAAS', text: 'Book instantly at a fixed rate. Get your footage the same day.' },
  { side: 'q', tag: 'The challenge', text: '"Every videographer pushes the cost up 40% past our budget."' },
  { side: 'a', tag: 'CAAS', text: 'One transparent price. Every add-on included — zero surprises.' },
  { side: 'q', tag: 'Pricing pain', text: '"Quality is inconsistent, and there’s always a brand risk."' },
  { side: 'a', tag: 'CAAS', text: 'Standardised, vetted crews. Consistent output on every single shoot.' },
] as const;

export default function Bottleneck() {
  const reduce = useReducedMotion();

  return (
    <section className="section dark bottleneck">
      <Parallax className="bottleneck__bg-wrap" distance={60}>
        <img className="bottleneck__bg" src="/images/home_lighting.jpg" alt="" aria-hidden="true" loading="lazy" />
      </Parallax>

      <div className="wrap bottleneck__grid">
        <div className="bottleneck__lede">
          <Reveal dir="up"><span className="eyebrow">Content OS</span></Reveal>
          <SplitText as="h2" className="h-section" text={"Why Content Creation\nShouldn't Be a Bottleneck."}
            highlight={["shouldn't"]} highlightClass="u-blue" stagger={0.038} />
          <Reveal dir="up" delay={0.14}>
            <p className="lead-txt bottleneck__body">We&rsquo;ve spent 12,000+ hours on set so you don&rsquo;t have to. CAAS is the engineering answer to production logistics — one system, any shoot, on demand.</p>
          </Reveal>
          <Reveal dir="up" delay={0.22}>
            <div className="bottleneck__trust">
              <div className="avatars"><span>AR</span><span>PK</span><span>MS</span><span>+</span></div>
              <small>Trusted by our full-time crew</small>
            </div>
          </Reveal>
        </div>

        {/* the objection/answer pairs land alternately, like a live thread */}
        <motion.div
          className="chat"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-18% 0px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
        >
          {THREAD.map((m, i) => (
            <motion.div
              key={i}
              className={`msg msg--${m.side}`}
              variants={
                reduce
                  ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                  : {
                      hidden: { opacity: 0, x: m.side === 'q' ? -34 : 34, y: 16, scale: 0.96 },
                      show: { opacity: 1, x: 0, y: 0, scale: 1 },
                    }
              }
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="msg__tag">{m.side === 'q' ? WARN : CHECK}{m.tag}</div>
              <p>{m.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
