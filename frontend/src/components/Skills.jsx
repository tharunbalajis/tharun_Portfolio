import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

// Monochrome line icons — same stroke weight/visual language as
// GitHubIcon/ExternalLinkIcon in Projects.jsx
function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7L3 12l5 5M16 7l5 5-5 5" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <circle cx="12" cy="12" r="2" />
      <path strokeLinecap="round" d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4-8 4-8-4 8-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8 4 8-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l8 4 8-4" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path strokeLinecap="round" d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path strokeLinecap="round" d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.6 2.6-2-2 2.6-2.6z" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-2 6-6 2 2-6 6-2z" />
    </svg>
  );
}

const iconMap = {
  code: CodeIcon,
  chip: ChipIcon,
  stack: StackIcon,
  database: DatabaseIcon,
  wrench: WrenchIcon,
  compass: CompassIcon,
};

// Must be literal strings so Tailwind JIT includes them — one distinct
// accent per category, pulled from the palette already used elsewhere
const categoryStyles = {
  code:     { bar: 'from-accent-500 to-accent-700',   iconBg: 'bg-accent-500/15',  iconText: 'text-accent-400',  tagHover: 'hover:border-accent-500/40' },
  chip:     { bar: 'from-purple-500 to-purple-700',   iconBg: 'bg-purple-500/15',  iconText: 'text-purple-400',  tagHover: 'hover:border-purple-500/40' },
  stack:    { bar: 'from-blue-500 to-blue-700',        iconBg: 'bg-blue-500/15',    iconText: 'text-blue-400',    tagHover: 'hover:border-blue-500/40' },
  database: { bar: 'from-emerald-500 to-emerald-700',  iconBg: 'bg-emerald-500/15', iconText: 'text-emerald-400', tagHover: 'hover:border-emerald-500/40' },
  wrench:   { bar: 'from-pink-500 to-pink-700',        iconBg: 'bg-pink-500/15',    iconText: 'text-pink-400',    tagHover: 'hover:border-pink-500/40' },
  compass:  { bar: 'from-cyan-500 to-cyan-700',        iconBg: 'bg-cyan-500/15',    iconText: 'text-cyan-400',    tagHover: 'hover:border-cyan-500/40' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-accent-700/8 rounded-full blur-3xl" />
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
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-[15px]">
            Technologies and frameworks I rely on to build intelligent, production-grade solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, ci) => {
            const style = categoryStyles[category.icon] ?? categoryStyles.code;
            const Icon = iconMap[category.icon] ?? CodeIcon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative"
              >
                {/* Ambient glow on hover, tinted per category — kept translucent so it reads as a halo, not a fill */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${style.bar} rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md`} />

                <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Top accent bar, distinct per category */}
                  <div className={`h-1 bg-gradient-to-r ${style.bar} flex-shrink-0`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-dark-600/80">
                      <div className={`w-10 h-10 rounded-xl ${style.iconBg} ${style.iconText} flex items-center justify-center flex-shrink-0`}>
                        <Icon />
                      </div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, si) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: ci * 0.05 + si * 0.04 }}
                          whileHover={{ scale: 1.06, y: -2 }}
                          className={`px-3 py-1.5 bg-dark-700/60 text-gray-300 text-sm rounded-lg border border-dark-600 ${style.tagHover} hover:text-white hover:shadow-[0_6px_16px_rgba(0,0,0,0.35)] transition-all duration-200 cursor-default`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
