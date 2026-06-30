import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    setIsTouch(mq.matches);
    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isTouch;
}

export default function CustomCursor() {
  const isTouch = useIsTouch();
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 650 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouch, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-150 ${
            isHovering ? 'bg-violet-500/80 scale-150' : 'bg-violet-500/40'
          }`}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-violet-500/30 pointer-events-none z-[9998] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isHovering ? 1.6 : 1, opacity: isHovering ? 0.6 : 0.3 }}
        transition={{ duration: 0.2 }}
      />

      {/* Ambient glow */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 rounded-full bg-violet-500/5 pointer-events-none z-[9997] hidden md:block blur-3xl"
        style={{ x: cursorX, y: cursorY }}
      />
    </>
  );
}
