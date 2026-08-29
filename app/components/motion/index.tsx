'use client';

/* ============================================================
   CAAS motion primitives
   Shared Framer Motion building blocks for the home page.
   Every primitive degrades to a static, fully-visible state
   when the visitor asks for reduced motion.
   ============================================================ */

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  useInView,
  type MotionValue,
  type Variants,
} from 'framer-motion';
import {
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from 'react';

/* ---------- shared timing language ----------
   One easing curve and one spring across the whole page so every
   animation shares the same rhythm. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN = [0.7, 0, 0.84, 0] as const;
export const SPRING = { type: 'spring', stiffness: 140, damping: 22, mass: 0.7 } as const;
export const SPRING_SOFT = { type: 'spring', stiffness: 90, damping: 20, mass: 0.9 } as const;

const VIEWPORT = { once: true, margin: '-12% 0px -10% 0px' } as const;

/* ============================================================
   Reveal — the workhorse scroll entrance.
   ============================================================ */

type Dir = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

const offsets: Record<Dir, { x?: number; y?: number; scale?: number }> = {
  up: { y: 34 },
  down: { y: -34 },
  left: { x: -44 },
  right: { x: 44 },
  scale: { scale: 0.94 },
  fade: {},
};

export function Reveal({
  children,
  dir = 'up',
  delay = 0,
  duration = 0.75,
  className,
  style,
  as = 'div',
  amount,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Static = as as ElementType;
    return (
      <Static className={className} style={style}>
        {children}
      </Static>
    );
  }

  const from = offsets[dir];

  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={amount ? { ...VIEWPORT, amount } : VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/* ============================================================
   Stagger — parent/child pair for lists and grids.
   ============================================================ */

export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
  as = 'div',
  style,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Static = as as ElementType;
    return (
      <Static className={className} style={style}>
        {children}
      </Static>
    );
  }

  return (
    <Comp
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </Comp>
  );
}

const childVariants: Record<Dir, Variants> = {
  up: { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -34 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -44 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 44 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export function StaggerItem({
  children,
  className,
  dir = 'up',
  as = 'div',
  style,
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  dir?: Dir;
  as?: ElementType;
  style?: CSSProperties;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Static = as as ElementType;
    return (
      <Static className={className} style={style}>
        {children}
      </Static>
    );
  }

  return (
    <Comp
      className={className}
      style={style}
      variants={childVariants[dir]}
      transition={{ duration, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/* ============================================================
   SplitText — per-word mask reveal.
   Words rise out of an overflow-hidden line box, so type appears
   to be printed onto the page rather than faded in.
   Use "\n" to force a line break; listed words get the accent class.
   ============================================================ */

export function SplitText({
  text,
  className,
  as = 'span',
  delay = 0,
  stagger = 0.042,
  duration = 0.85,
  highlight = [],
  highlightClass = 'u-blue',
  once = true,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  duration?: number;
  highlight?: string[];
  highlightClass?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = as as ElementType;
  const lines = text.split('\n');
  const hl = new Set(highlight.map((w) => w.toLowerCase()));
  const bare = (w: string) => w.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line, li) => (
          <span className="split__line" key={li}>
            {line.split(' ').map((w, wi) => (
              <span key={wi} className={hl.has(bare(w)) ? highlightClass : undefined}>
                {w}{wi < line.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        ))}
      </Tag>
    );
  }

  let index = 0;

  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <span className="split__line" key={li}>
          {line.split(' ').map((word, wi) => {
            const i = index++;
            return (
              <span className="split__word" key={wi}>
                <motion.span
                  className={hl.has(bare(word)) ? `split__inner ${highlightClass}` : 'split__inner'}
                  initial={{ y: '110%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once, margin: '-8% 0px -8% 0px' }}
                  transition={{ duration, delay: delay + i * stagger, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

/* ============================================================
   Magnetic — the element leans toward the cursor, then springs back.
   Pointer-fine only: touch devices never fire the move handler.
   ============================================================ */

export function Magnetic({
  children,
  className,
  strength = 0.32,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: ElementType;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;

  const cls = ['magnetic', className].filter(Boolean).join(' ');

  if (reduce) {
    const Static = as as ElementType;
    return <Static className={cls}>{children}</Static>;
  }

  return (
    <Comp
      ref={ref}
      className={cls}
      style={{ x: sx, y: sy }}
      onPointerMove={(e: React.PointerEvent) => {
        if (e.pointerType !== 'mouse') return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </Comp>
  );
}

/* ============================================================
   TiltCard — perspective tilt that tracks the real cursor position
   instead of snapping to one fixed angle on hover.
   ============================================================ */

export function TiltCard({
  children,
  className,
  max = 9,
  lift = -10,
  as = 'div',
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  lift?: number;
  as?: ElementType;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const cfg = { stiffness: 180, damping: 20, mass: 0.5 };
  const rotY = useSpring(useTransform(px, [0, 1], [-max, max]), cfg);
  const rotX = useSpring(useTransform(py, [0, 1], [max, -max]), cfg);
  const z = useSpring(useTransform(hover, [0, 1], [0, lift]), cfg);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareO = useSpring(useTransform(hover, [0, 1], [0, 0.5]), cfg);

  const Comp = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Static = as as ElementType;
    return (
      <Static className={className} style={style}>
        {children}
      </Static>
    );
  }

  return (
    <Comp
      ref={ref}
      className={className}
      style={{ ...style, rotateX: rotX, rotateY: rotY, y: z, transformPerspective: 1100 }}
      onPointerMove={(e: React.PointerEvent) => {
        if (e.pointerType !== 'mouse') return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
        hover.set(1);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
        hover.set(0);
      }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="tilt__glare"
        style={{ opacity: glareO, ['--gx' as string]: glareX, ['--gy' as string]: glareY }}
      />
    </Comp>
  );
}

/* ============================================================
   Parallax — moves a layer at a different rate to the page.
   ============================================================ */

export function Parallax({
  children,
  className,
  distance = 80,
  axis = 'y',
  style,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  axis?: 'x' | 'y';
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const shift = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.6 });

  if (reduce) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, [axis]: shift }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   Counter — counts up the first time it enters the viewport.
   ============================================================ */

export function Counter({
  to,
  suffix = '',
  prefix = '',
  duration = 1600,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let frame = 0;
    let t0: number | null = null;
    const step = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

/* ============================================================
   VelocityMarquee — the strip drifts on its own, then surges and
   skews with the direction and speed of the reader's scroll.
   ============================================================ */

function wrapValue(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export function VelocityMarquee({
  children,
  baseVelocity = 2.4,
  className,
  repeat = 2,
}: {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
  repeat?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '20% 0px' });

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1200, 0, 1200], [-4, 0, 4], { clamp: false });
  const skew = useTransform(smooth, [-1500, 0, 1500], [-6, 0, 6], { clamp: true });
  const smoothSkew = useSpring(skew, { damping: 40, stiffness: 200 });

  const x = useTransform(baseX, (v) => `${wrapValue(-100 / repeat, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce || !inView) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    moveBy += direction.current * moveBy * Math.abs(f);
    baseX.set(baseX.get() + moveBy);
  });

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        <div className="marquee__track marquee__track--static">{children}</div>
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ skewX: smoothSkew }}>
      <motion.div className="marquee__track" style={{ x }}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div className="marquee__set" key={i} aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   Small hooks used by individual sections.
   ============================================================ */

export function useSectionProgress(offset: ['start end', 'end start'] | any = ['start end', 'end start']) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return { ref, progress: scrollYProgress };
}

export { motion, useScroll, useTransform, useSpring, useReducedMotion, useInView, useMotionValue };
export type { MotionValue };
