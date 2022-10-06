import { motion } from 'framer-motion';
import { ReactNode, SyntheticEvent } from 'react';

function Animate({
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
  variants: any;
  onClick?: (e?: SyntheticEvent) => void;
}) {
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
