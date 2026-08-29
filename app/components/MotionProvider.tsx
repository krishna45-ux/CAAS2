'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/* reducedMotion="user" makes Framer skip transform animations for anyone
   with the OS setting on, without every component having to opt in. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
