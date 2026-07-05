import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

// Must be literal strings so Tailwind JIT includes them
const colorMap = {
  accent:  { bar: 'from-accent-500 to-accent-700',  bg: 'from-accent-500/25 to-accent-700/25',  text: 'text-accent-400',  badge: 'bg-accent-500/12 text-accent-300 border-accent-500/25' },
  blue:    { bar: 'from-blue-600 to-cyan-600',       bg: 'from-blue-600/25 to-cyan-600/25',       text: 'text-blue-400',    badge: 'bg-blue-500/12 text-blue-300 border-blue-500/25' },
  emerald: { bar: 'from-emerald-600 to-teal-600',    bg: 'from-emerald-600/25 to-teal-600/25',    text: 'text-emerald-400', badge: 'bg-emerald-500/12 text-emerald-300 border-emerald-500/25' },
  pink:    { bar: 'from-pink-600 to-rose-600',       bg: 'from-pink-600/25 to-rose-600/25',       text: 'text-pink-400',    badge: 'bg-pink-500/12 text-pink-300 border-pink-500/25' },
  purple:  { bar: 'from-purple-600 to-fuchsia-600',  bg: 'from-purple-600/25 to-fuchsia-600/25',  text: 'text-purple-400',  badge: 'bg-purple-500/12 text-purple-300 border-purple-500/25' },
};

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </svg>
  );
}

// Line-style domain icons for the card header — one per project.color
function GlobeIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path strokeLinecap="round" d="M3 12h18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path strokeLinecap="round" d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
      <rect x="5" y="3" width="9" height="18" rx="1" />
      <rect x="14" y="9" width="6" height="12" rx="1" />
      <path strokeLinecap="round" d="M8 7h1M11 7h1M8 11h1M11 11h1M8 15h1M11 15h1M17 12h1M17 15h1M17 18h1" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7L3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  );
}

const domainIconMap = {
  accent: GlobeIcon,
  blue: ShieldIcon,
  emerald: ChipIcon,
  purple: BuildingIcon,
};

function ProjectDomainIcon({ color }) {
  const Icon = domainIconMap[color] ?? CodeIcon;
  return <Icon />;
}

function ProjectModal({ project, onClose }) {
  const colors = colorMap[project.color] ?? colorMap.accent;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="relative w-full max-w-2xl glass rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Color bar */}
        <div className={`h-1 bg-gradient-to-r ${colors.bar}`} />

        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">{project.fullDescription}</p>

          {project.metric && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border mb-5 ${colors.badge}`}>
              <BoltIcon /> {project.metric}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-7">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium border border-dark-600">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-dark-700 text-gray-200 rounded-lg hover:bg-dark-600 transition-colors text-sm font-medium"
            >
              <GitHubIcon /> GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${colors.badge} border`}
              >
                <ExternalLinkIcon /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-28 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[28rem] h-[28rem] bg-accent-700/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[28rem] h-[28rem] bg-accent-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-[15px]">
            Selected work showcasing AI/ML and full-stack engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => {
            const colors = colorMap[project.color] ?? colorMap.accent;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group"
              >
                <div className="relative glass rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(255,154,31,0.22)] transition-shadow duration-500 h-full flex flex-col">
                  {/* Accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${colors.bar} flex-shrink-0`} />

                  {/* Icon area */}
                  <div className={`h-40 bg-gradient-to-br ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <div className={`${colors.text} opacity-90`}>
                      <ProjectDomainIcon color={project.color} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Title row with links */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3
                        className="text-xl font-bold text-white group-hover:text-accent-300 transition-colors duration-200 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 text-gray-400 hover:text-white bg-dark-700/60 rounded-lg transition-colors"
                          title="GitHub"
                        >
                          <GitHubIcon />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`p-2 rounded-lg transition-colors bg-dark-700/60 hover:bg-dark-600 ${colors.text}`}
                            title="Live Demo"
                          >
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>

                    <p
                      className="text-gray-400 text-sm leading-relaxed mb-4 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.description}
                    </p>

                    {/* Impact metric */}
                    {project.metric && (
                      <div className={`inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${colors.badge}`}>
                        <BoltIcon /> {project.metric}
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-dark-700/60 text-gray-300 rounded-md text-xs border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* "View details" hint */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`flex items-center gap-1.5 px-6 py-3 text-xs font-semibold border-t border-dark-600/60 ${colors.text} hover:bg-dark-700/40 transition-colors duration-200 w-full`}
                  >
                    Full details
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
