import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const socialLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    hoverColor: 'hover:shadow-[0_0_20px_rgba(255,154,31,0.2)]',
    iconBg: 'bg-accent-600/20',
    iconColor: 'text-accent-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: profile.linkedin.replace('https://', ''),
    href: profile.linkedin,
    hoverColor: 'hover:shadow-[0_0_20px_rgba(255,154,31,0.2)]',
    iconBg: 'bg-accent-700/20',
    iconColor: 'text-accent-500',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: profile.github.replace('https://', ''),
    href: profile.github,
    hoverColor: 'hover:shadow-[0_0_20px_rgba(255,154,31,0.2)]',
    iconBg: 'bg-dark-600',
    iconColor: 'text-white',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const inputClass =
    'w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:shadow-[0_0_16px_rgba(255,154,31,0.25)] transition-all duration-300 text-sm';

  return (
    <section id="contact" className="py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-accent-700/8 rounded-full blur-3xl" />
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
            Let's Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-[15px]">
            Have a project in mind or want to collaborate? I'd love to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  required className={inputClass} placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  required className={inputClass} placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project…"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(255,154,31,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-accent-500 rounded-xl font-semibold text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-400 text-sm text-center"
                >
                  Message sent — I'll be in touch soon!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                I'm always open to new projects, creative ideas, and opportunities.
                Reach out through any of the channels below.
              </p>

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 8, transition: { duration: 0.18 } }}
                    className={`flex items-center gap-4 p-4 bg-dark-700/50 rounded-xl transition-all duration-300 hover:bg-dark-700 ${link.hoverColor}`}
                  >
                    <div className={`w-11 h-11 ${link.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 ${link.iconColor}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{link.label}</p>
                      <p className="text-white font-medium text-sm">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
