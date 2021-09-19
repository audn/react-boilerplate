import { motion } from 'framer-motion';
import React from 'react';
import { IBaseComponent } from '../../lib/interfaces';

function Animate({
  children,
  ...props
}: IBaseComponent & { variants: any; onClick?: () => void }) {
  return (
    <motion.div
      className="w-full"
      initial="initial"
      animate="enter"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Animate;
