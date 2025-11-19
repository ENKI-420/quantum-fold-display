'use client'

import { motion } from 'framer-motion'

export default function Architecture() {
  return (
    <section className="py-24 px-4 bg-slate-950/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Kernel-Level Architecture</span>
          </h2>
          <p className="text-xl text-gray-400">4 GPL-2.0 licensed Linux modules</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['quantum_consciousness.ko', 'qnet_transport.ko', 'quantum_rng.ko', 'fold_quantum_display.ko'].map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5"
            >
              <code className="text-purple-400 font-mono text-sm">{module}</code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
