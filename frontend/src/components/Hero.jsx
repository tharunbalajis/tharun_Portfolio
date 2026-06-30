import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/profile';

const Background3D = lazy(() => import('./Background3D'));

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const scrollOpacity = useTransform(scrollY, [0, 260], [1, 0]);

  useEffect(() => {
    const role = profile.roles[currentRole];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < role.length) {
        timeout = setTimeout(
          () => setDisplayText(role.slice(0, displayText.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 38);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % profile.roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D background — fades in after load */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-dark-900">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(124,58,237,0.12)_0%,transparent_70%)]" />
            </div>
          }
        >
          <Background3D />
        </Suspense>
      </motion.div>

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-transparent to-dark-900 z-[1]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.035)_1px,transparent_1px)] bg-[size:64px_64px] z-[1]" />

      {/* Radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-3xl z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ y: contentY }}
      >
        {/* Entrance animation wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/25 text-violet-300 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
            Hello, I'm {profile.name}
          </motion.div>

          {/* Name */}
          <h1 className="mb-5 tracking-tight leading-[1.04]">
            <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold">
              {profile.name}
            </span>
            <span className="block gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              {profile.title}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="h-9 flex items-center justify-center mb-7">
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-[2px] h-5 md:h-[22px] bg-violet-400 ml-0.5 align-middle"
              />
            </p>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-11 leading-relaxed font-light">
            Building intelligent systems with cutting-edge AI/ML technologies.
            Passionate about solving complex problems through innovation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: '0 0 48px rgba(124,58,237,0.55)' }}
              whileTap={{ scale: 0.97 }}
              className="relative px-9 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, borderColor: 'rgba(139,92,246,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-9 py-4 glass rounded-full font-semibold text-gray-200 border border-white/10 hover:border-violet-500/40 transition-colors duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ opacity: scrollOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border border-gray-600/60 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-violet-500 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
