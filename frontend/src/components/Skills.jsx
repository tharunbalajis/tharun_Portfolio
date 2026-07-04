import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative"
            >
              {/* Animated glow border on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent-600 via-accent-400 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative glass rounded-2xl p-6 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-dark-600/80">
                  <span className="text-2xl leading-none" role="img" aria-label={category.title}>
                    {category.icon}
                  </span>
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
                      whileHover={{ scale: 1.06 }}
                      className="px-3 py-1.5 bg-dark-700/60 text-gray-300 text-sm rounded-lg border border-dark-600 group-hover:border-accent-500/40 group-hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
