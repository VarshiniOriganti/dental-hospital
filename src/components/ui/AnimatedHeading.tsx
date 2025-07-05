import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface AnimatedHeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'fadeIn' | 'slideUp' | 'slideIn';
}

import type { Variants } from 'framer-motion';

const getAnimationVariants = (): Record<string, Variants> => ({
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },
  slideIn: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
});

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  as: Tag = 'h2',
  children,
  className = '',
  delay = 0,
  animationType = 'fadeIn'
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getAnimationVariants()[animationType]}
      transition={{ delay: delay }}
      className={className}
    >
      {React.createElement(Tag, null, children)}
    </motion.div>
  );
};

export default AnimatedHeading;
