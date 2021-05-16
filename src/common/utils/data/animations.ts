export const fadeInTop = {
  initial: { y: 30, x: 0, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: {
    y: 25,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};
export const fadeOutTop = {
  initial: { y: 15, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: {
    y: -25,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};
export const fadeIn = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};
