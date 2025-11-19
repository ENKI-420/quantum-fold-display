'use client'

import { motion } from 'framer-motion'
import { Download, Github, FileText, Mail } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 px-4" id="download">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden glow-border"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm" />

          <div className="relative p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text glow-text">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Download DNA-Lang for Samsung Fold 7 and start your quantum computing journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="https://github.com/ENKI-420/quantum-fold-display/releases"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download (Magisk Module)
              </Link>

              <Link
                href="https://github.com/ENKI-420/quantum-fold-display"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-purple-500/50 hover:border-purple-500 text-purple-200 hover:text-purple-100 transition-all duration-300 backdrop-blur-sm"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Link
                href="/docs"
                className="p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FileText className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-gray-400 text-sm">Installation guides, API reference, tutorials</p>
              </Link>

              <Link
                href="https://github.com/ENKI-420/quantum-fold-display/discussions"
                className="p-6 rounded-lg border border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300"
              >
                <svg className="w-8 h-8 text-blue-400 mb-3 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                </svg>
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-400 text-sm">Join discussions, get help, share experiments</p>
              </Link>

              <Link
                href="mailto:devin@agiledefensesystems.com"
                className="p-6 rounded-lg border border-pink-500/30 hover:border-pink-500/60 bg-pink-500/5 hover:bg-pink-500/10 transition-all duration-300"
              >
                <Mail className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
                <p className="text-gray-400 text-sm">Custom deployments, training, consulting</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
