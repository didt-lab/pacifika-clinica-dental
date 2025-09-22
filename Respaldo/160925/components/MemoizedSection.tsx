import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface MemoizedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  initial?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
  style?: React.CSSProperties;
}

const MemoizedSection = memo(({ 
  id, 
  className = '', 
  children, 
  initial = { opacity: 0, y: 30 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  viewport = { once: true },
  style = {}
}: MemoizedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      style={{ willChange: 'transform, opacity', ...style }}
    >
      {children}
    </motion.section>
  );
});

MemoizedSection.displayName = 'MemoizedSection';

export default MemoizedSection;
