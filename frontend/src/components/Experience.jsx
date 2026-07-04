import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { education } from '../data/education';

function ExperienceCard({ exp }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      className="glass rounded-xl p-6 hover:shadow-[0_0_28px_rgba(255,154,31,0.2)] transition-shadow duration-300"
    >
      <span className="inline-block px-3 py-1 bg-accent-500/15 text-accent-400 rounded-full text-xs font-semibold mb-3 border border-accent-500/20">
        {exp.startDate} – {exp.endDate}
      </span>
      <h3 className="text-xl font-bold text-white mb-0.5">{exp.role}</h3>
      <p className="text-accent-400 font-medium text-sm mb-1">{exp.company}</p>
      {exp.location && (
        <p className="text-gray-500 text-xs mb-3">{exp.location}</p>
      )}

      <ul className="space-y-1.5 mb-4">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500/70 flex-shrink-0 mt-[7px]" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-dark-700/70 text-gray-300 rounded-md text-xs border border-dark-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-accent-700/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-[15px]">
            My professional journey in AI, ML, and software engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-28">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-accent-500 via-accent-600/70 to-accent-500/10 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={`${exp.role}-${exp.company}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="relative flex items-start"
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-accent-500 ring-4 ring-dark-800" />
                    <div className="absolute inset-0 rounded-full bg-accent-400 animate-ping opacity-20" />
                  </div>

                  {/* Card: full-width on mobile, half-width alternating on desktop */}
                  <div
                    className={`w-full pl-14 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <ExperienceCard exp={exp} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Education ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="glass rounded-xl p-6 hover:shadow-[0_0_28px_rgba(255,154,31,0.18)] transition-shadow duration-300"
            >
              <span className="inline-block px-3 py-1 bg-accent-500/15 text-accent-400 rounded-full text-xs font-semibold mb-3 border border-accent-500/20">
                {edu.startDate} – {edu.endDate}
              </span>
              <h3 className="text-base font-bold text-white mb-1 leading-snug">{edu.degree}</h3>
              <p className="text-accent-400 font-medium text-sm mb-3">{edu.school}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{edu.description}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-700/80 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                <span className="text-gray-300 text-sm font-medium">{edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
