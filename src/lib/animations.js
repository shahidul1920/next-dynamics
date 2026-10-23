// ── Shared GSAP animation utilities ──
import gsap from "gsap";

/**
 * Staggered reveal from below (for text, cards, etc.)
 */
export function revealFromBelow(targets, options = {}) {
  const {
    y = 60,
    stagger = 0.08,
    duration = 0.8,
    ease = "power3.out",
    delay = 0,
  } = options;

  return gsap.fromTo(
    targets,
    { y, opacity: 0 },
    { y: 0, opacity: 1, duration, stagger, ease, delay }
  );
}

/**
 * Fade in with optional scale
 */
export function fadeIn(targets, options = {}) {
  const {
    scale = 1,
    duration = 0.6,
    ease = "power2.out",
    delay = 0,
  } = options;

  return gsap.fromTo(
    targets,
    { opacity: 0, scale: scale < 1 ? scale : 1 },
    { opacity: 1, scale: 1, duration, ease, delay }
  );
}

/**
 * Slide in from direction
 */
export function slideIn(targets, direction = "left", options = {}) {
  const { distance = 60, duration = 0.8, ease = "power3.out", delay = 0 } =
    options;

  const fromProps = { opacity: 0 };
  if (direction === "left") fromProps.x = -distance;
  if (direction === "right") fromProps.x = distance;
  if (direction === "up") fromProps.y = -distance;
  if (direction === "down") fromProps.y = distance;

  const toProps = { opacity: 1, x: 0, y: 0, duration, ease, delay };

  return gsap.fromTo(targets, fromProps, toProps);
}

/**
 * Counter animation for numbers
 */
export function animateCounter(target, endValue, options = {}) {
  const { duration = 2, ease = "power2.out" } = options;
  const obj = { val: 0 };

  return gsap.to(obj, {
    val: endValue,
    duration,
    ease,
    onUpdate: () => {
      if (target && target.current) {
        target.current.textContent = Math.round(obj.val);
      }
    },
  });
}

/**
 * Draw SVG line (stroke-dashoffset animation)
 */
export function drawLine(target, options = {}) {
  const { duration = 1.5, ease = "power2.inOut", delay = 0 } = options;

  return gsap.fromTo(
    target,
    { strokeDashoffset: gsap.getProperty(target, "strokeDasharray") || 1000 },
    { strokeDashoffset: 0, duration, ease, delay }
  );
}
