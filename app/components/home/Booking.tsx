'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SplitText, Reveal, Magnetic, EASE } from '../motion';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri'] as const;
type Day = typeof DAYS[number];

const MESSAGES: Record<Day, string> = {
  mon: 'Mondays are perfect for pre-production and quick corporate drop-ins.',
  tue: 'Tuesdays offer the highest availability for our elite RED camera kits.',
  wed: 'Mid-week shoots are ideal for multi-location brand films.',
  thu: 'Thursdays are the sweet spot for influencer and social media batches.',
  fri: 'Fridays book out fast for event coverage and weekend prep.',
};

export default function Booking() {
  const [active, setActive] = useState<Day>('tue');
  const reduce = useReducedMotion();

  return (
    <section className="section wrap booking">
      <div className="booking__grid">
        <div>
          <Reveal dir="up"><span className="eyebrow">No one&rsquo;s here to waste time &amp; money</span></Reveal>
          <SplitText as="h2" className="h-section" text="Book Smart" highlight={['smart']} highlightClass="u-blue" />
          <Reveal dir="up" delay={0.14}>
            <p className="lead-txt">Manage your whole production calendar in one place. Certain days unlock faster turnarounds and premium kit availability.</p>
          </Reveal>
        </div>

        <Reveal dir="up" delay={0.1} className="calendar">
          <div className="calendar__days" role="tablist" aria-label="Availability by day">
            {DAYS.map((day) => (
              <button
                key={day}
                className={`calendar__day ${active === day ? 'is-active' : ''}`}
                role="tab"
                aria-selected={active === day}
                onClick={() => setActive(day)}
              >
                {/* the blue marker slides between days rather than blinking */}
                {active === day && (
                  <motion.span layoutId="cal-marker" className="calendar__marker"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }} />
                )}
                <span className="calendar__day-txt">{day.toUpperCase()}</span>
                <span className="tick" />
              </button>
            ))}
          </div>

          <div className="calendar__panel">
            <h4>
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 2 15 9l7 .5-5.5 4.5L18 21l-6-3.8L6 21l1.5-7L2 9.5 9 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              Prime Availability
            </h4>
            <div className="calendar__msg">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={active}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: EASE }}
                >
                  {MESSAGES[active]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="calendar__meta">
              <span>CREW <b>Ready</b></span><span>KIT <b>RED / Sony</b></span><span>TURNAROUND <b>24h</b></span>
            </div>
            <Magnetic strength={0.2}>
              <a href="#pricing" className="btn btn--primary">
                Check if slots are available
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
