import { motion, useInView, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type ScrollDirection = 'up' | 'down' | 'left' | 'right';

type ScrollAnimationProps = {
  children: ReactNode;
  direction?: ScrollDirection;
  delay?: number;
  className?: string;
  amount?: number | 'some' | 'all';
};

export const ScrollAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  amount = 0.1,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  const directions: Record<ScrollDirection, { x: number; y: number }> = {
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth ease-out curve
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | 'some' | 'all';
  };
};

export const StaggerContainer = ({
  children,
  className = '',
  staggerChildren = 0.1,
  delayChildren = 0.1,
  viewport,
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: '-50px',
        ...(viewport || {})
      }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: ScrollDirection;
  distance?: number;
};

export const StaggerItem = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
}: StaggerItemProps) => {
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      ...(direction === 'up' && { y: distance }),
      ...(direction === 'down' && { y: -distance }),
      ...(direction === 'left' && { x: distance }),
      ...(direction === 'right' && { x: -distance }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth ease-out curve
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
