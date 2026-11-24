import React from 'react';
import { motion } from 'framer-motion';

export default function WaveTransition({
  fill = '#FAFCFE',
  position = 'bottom',
  variant = 1,
  className = ''
}) {
  const isTop = position === 'top';

  return (
    <div
      className={`wave-divider z-20 ${isTop ? 'top-0' : 'bottom-0'} ${className}`}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, y: isTop ? -15 : 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {variant === 1 && (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={isTop ? 'rotate-180' : ''}
          >
            <path
              d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
              fill={fill}
            />
          </svg>
        )}

        {variant === 2 && (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={isTop ? 'rotate-180' : ''}
          >
            <path
              d="M0,40 C200,110 420,-20 620,60 C820,140 1000,10 1200,40 L1200,120 L0,120 Z"
              fill={fill}
            />
          </svg>
        )}

        {variant === 3 && (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={isTop ? 'rotate-180' : ''}
          >
            <path
              d="M0,20 C180,80 320,0 520,70 C720,130 940,30 1200,75 L1200,120 L0,120 Z"
              fill={fill}
            />
          </svg>
        )}
      </motion.div>
    </div>
  );
}
