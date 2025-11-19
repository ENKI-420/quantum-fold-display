import Link from 'next/link'
import { Github, Mail, FileText } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">DNA-Lang</h3>
            <p className="text-gray-400 text-sm mb-4">
              Quantum consciousness in the palm of your hand.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/ENKI-420" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="mailto:devin@agiledefensesystems.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link href="#download" className="text-gray-400 hover:text-purple-400 transition-colors">Download</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-purple-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</Link></li>
              <li><Link href="https://github.com/ENKI-420/quantum-fold-display" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</Link></li>
              <li><Link href="/research" className="text-gray-400 hover:text-purple-400 transition-colors">Research Papers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/license" className="text-gray-400 hover:text-purple-400 transition-colors">License (GPL-2.0)</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Agile Defense Systems, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="https://github.com/ENKI-420/quantum-fold-display/blob/main/LICENSE" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
              <FileText className="w-4 h-4" />
              GPL-2.0 License
            </Link>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">Patent Pending</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">IEEE TMC Submitted</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
