import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[28rem] h-[28rem] bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[28rem] h-[28rem] bg-accent-700/8 rounded-full blur-3xl" />
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
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-[15px]">
            Recognition and milestones from my journey in AI, development, and research
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="glass rounded-xl p-6 group hover:shadow-[0_0_30px_rgba(255,154,31,0.18)] transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.span
                  className="text-3xl leading-none flex-shrink-0"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white group-hover:text-accent-300 transition-colors duration-200 truncate">
                      {item.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs text-gray-500 bg-dark-700 px-2.5 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
