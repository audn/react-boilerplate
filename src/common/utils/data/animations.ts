export const fadeInTop = {
  initial: { y: 30, x: 0, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
export const fadeIn = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};
