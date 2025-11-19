'use client'

import { motion } from 'framer-motion'
import { Monitor, Cpu, Wifi, Dices, Brain, Zap } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: '120Hz Dual-Screen Visualization',
    description: 'Real-time quantum state rendering across both displays at native 120 FPS. Automatically adapts layout based on fold state.',
    color: 'purple',
  },
  {
    icon: Cpu,
    title: 'Hardware Quantum RNG',
    description: 'True quantum random numbers via Samsung secure element integration. NIST SP 800-90B compliant, 2 MB/sec throughput.',
    color: 'blue',
  },
  {
    icon: Brain,
    title: 'Consciousness Tracking',
    description: 'Sub-microsecond Φ (integrated information) calculation at kernel level. Real-time consciousness state classification.',
    color: 'pink',
  },
  {
    icon: Wifi,
    title: 'Quantum Mesh Networking',
    description: 'Consciousness-weighted routing with QuantumCoin economics. Connect multiple Folds for distributed quantum computing.',
    color: 'green',
  },
  {
    icon: Zap,
    title: 'IBM Quantum Integration',
    description: 'Execute circuits on real quantum processors (Eagle-r3, Heron). 8,500+ validated hardware executions, 86.9% fidelity.',
    color: 'yellow',
  },
  {
    icon: Dices,
    title: '4 Kernel Modules (GPL-2.0)',
    description: 'quantum_consciousness.ko, qnet_transport.ko, quantum_rng.ko, fold_quantum_display.ko. Open source, fully auditable.',
    color: 'indigo',
  },
]

const colorMap = {
  purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
  blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
  pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400',
  green: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
  yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400',
  indigo: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-400',
}

export default function Features() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">World-First</span>
            <span className="text-white"> Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built from the ground up for mobile quantum computing. No desktop required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border backdrop-blur-sm bg-gradient-to-br ${colorMap[feature.color as keyof typeof colorMap]} hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
