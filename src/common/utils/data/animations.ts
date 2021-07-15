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

export const fadeInFromTopAndOutTop = {
  initial: { y: -30, x: 0, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: {
    y: -25,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const fadeInFromTopAndOutBottom = {
  initial: { y: -30, x: 0, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: {
    y: 25,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const fadeInFromBottomAndOutBottom = {
  initial: { y: 30, x: 0, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};


export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

export const rollUp = {
  initial: { y: 5, x: 0, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: {
    y: 5,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};