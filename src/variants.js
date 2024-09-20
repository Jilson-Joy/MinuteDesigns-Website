export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const popIn = (delay = 0, options = {}) => {
  const {
    duration = 2, // Set a longer duration (e.g., 2 seconds)
    scaleStart = 0.5, // Start from half size
    scaleEnd = 1, // End at full size
    opacityStart = 0, // Start fully transparent
    opacityEnd = 1, // End fully opaque
    ease = [0.25, 0.25, 0.25, 0.75], // Easing for the transition
  } = options;

  return {
    hidden: {
      scale: scaleStart,
      opacity: opacityStart,
    },
    show: {
      scale: scaleEnd,
      opacity: opacityEnd,
      transition: {
        type: "spring", // Spring for a bouncy effect
        stiffness: 300, // Lower stiffness for a slower bounce
        damping: 20, // Damping to reduce the bounce effect
        duration: duration, // Make the animation slower
        delay: delay,
        ease: ease,
      },
    },
  };
};
