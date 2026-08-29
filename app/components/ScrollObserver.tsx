'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTOR =
  '.reveal, .reveal-left, .reveal-right, .reveal-text-down, .reveal-text-up, ' +
  '.reveal-shutter, .reveal-deal, .reveal-lens, .reveal-scan, [data-count]';

const EXPLICIT_STEP = /(?:^|\s)d([0-6])(?:\s|$)/;

/* Structural blocks that should animate in even where the page markup never
   got a .reveal class. Enrolling them here keeps every page consistent
   without sprinkling classes through six page files. */
const AUTO_ENROLL = [
  '.bento-card', '.blog-card', '.contact-card', '.stat-card', '.team-card',
  '.standard-card', '.pf-niche-card', '.pf-guide-card', '.pf-icon-box',
  '.pf-price-card', '.comparison-card', '.kc-hub-card', '.kc-post-card',
  '.exclusion-card', '.kc-discover-item', '.addon-card', '.inquiry-card',
  '.page-main .head', '.faq-item', '.process-step',
].join(', ');

const REVEAL_CLASSES = [
  'reveal', 'reveal-left', 'reveal-right', 'reveal-text-down', 'reveal-text-up',
  'reveal-shutter', 'reveal-deal', 'reveal-lens', 'reveal-scan',
];

function hasRevealClass(el: Element) {
  return REVEAL_CLASSES.some((c) => el.classList.contains(c));
}

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateCount(el: Element) {
      if (el.getAttribute('data-animated') === 'true') return;
      el.setAttribute('data-animated', 'true');
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) {
        el.textContent = target.toLocaleString('en-IN') + suffix;
        return;
      }
      const dur = 1400;
      let t0: number | null = null;
      const step = (t: number) => {
        if (t0 === null) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    /* Siblings that reveal together used to fire in perfect unison, which is
       what made the inner pages feel flat. Give each one a cascading delay.
       Written inline on purpose: several card rules use a `transition`
       shorthand that outranks the .dN classes and would zero the delay. */
    function stagger(nodes: Element[]) {
      const groups = new Map<Element, Element[]>();
      nodes.forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        if (!groups.has(parent)) groups.set(parent, []);
        groups.get(parent)!.push(el);
      });
      groups.forEach((sibs) => {
        if (sibs.length < 2) return;
        sibs.forEach((el, i) => {
          // honour an authored dN step when there is one, else use position
          const m = EXPLICIT_STEP.exec(el.className);
          const step = m ? parseInt(m[1], 10) : Math.min(i, 8);
          (el as HTMLElement).style.transitionDelay = `${step * 65}ms`;
        });
      });
    }

    let cleanup: (() => void) | null = null;

    const timer = setTimeout(() => {
      // enrol structural blocks the markup missed, but never anything inside
      // a hero (those have their own CSS entrance) or nested in a block that
      // is already animating — a parent and child both moving reads as jitter
      document.querySelectorAll(AUTO_ENROLL).forEach((el) => {
        if (hasRevealClass(el)) return;
        if (el.closest('.page-hero, .pf-hero, .kc-hero, .services-cta, .contact-hero')) return;
        if (el.parentElement?.closest(REVEAL_CLASSES.map((c) => '.' + c).join(','))) return;
        el.classList.add('reveal');
      });

      const nodes = Array.from(document.querySelectorAll(SELECTOR));
      if (!reduceMotion) stagger(nodes);

      if ('IntersectionObserver' in window && !reduceMotion) {
        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              e.target.classList.add('is-in');
              if (e.target.hasAttribute('data-count')) animateCount(e.target);
              obs.unobserve(e.target);
            });
          },
          // fire a touch early so content is settled by the time it is read
          { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
        );
        nodes.forEach((el) => observer.observe(el));
        cleanup = () => observer.disconnect();
      } else {
        nodes.forEach((el) => {
          el.classList.add('is-in');
          if (el.hasAttribute('data-count')) animateCount(el);
        });
      }
    }, 90);

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return null;
}
