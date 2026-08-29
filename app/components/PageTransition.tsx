'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/* Deliberately a CSS animation, not a JS one.
   A Framer `animate` that never gets to run — a stalled rAF, a hydration
   hiccup — leaves the wrapper stuck at opacity 0, which hides the entire
   page rather than one element. A keyframe with `both` cannot stall, and
   the global prefers-reduced-motion block already neutralises it.
   Remounting on `key` replays it on every route change. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="page-fade" key={pathname}>
      {children}
    </div>
  );
}
