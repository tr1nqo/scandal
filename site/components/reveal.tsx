'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in seconds before the animation starts. */
  delay?: number
  /** Vertical travel distance in px. */
  y?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'figure' | 'span'
}

/**
 * Smooth fade-in-up on scroll, in the style of premium Tilda sites.
 * Respects prefers-reduced-motion via framer-motion's built-in handling.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
