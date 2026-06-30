import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-28 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[28rem] h-[28rem] bg-violet-500/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-1">{profile.tagline}</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mb-6" />

              {profile.bio.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed mb-4 last:mb-0 text-[15px]">
                  {para}
                </p>
              ))}

              {/* Core stack pills */}
              <div className="flex flex-wrap gap-2.5 mt-7">
                {profile.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-violet-500/15 text-violet-300 rounded-full text-sm border border-violet-500/25 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="grid gap-5"
          >
            {profile.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="glass rounded-xl p-6 cursor-default group hover:border-violet-500/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-violet-600/25 to-blue-600/25 flex items-center justify-center flex-shrink-0 group-hover:from-violet-600/40 group-hover:to-blue-600/40 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1.5 group-hover:text-violet-300 transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
