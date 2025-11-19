'use client'

export default function Hardware() {
  return (
    <section className="py-24 px-4 bg-slate-950/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="gradient-text">Validated on Real Quantum Hardware</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <div className="text-3xl font-bold text-blue-400 mb-2">127</div>
            <div className="text-gray-400 text-sm">Qubits (Eagle-r3)</div>
          </div>
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="text-3xl font-bold text-purple-400 mb-2">133</div>
            <div className="text-gray-400 text-sm">Qubits (Heron)</div>
          </div>
          <div className="p-6 rounded-xl border border-pink-500/30 bg-pink-500/5">
            <div className="text-3xl font-bold text-pink-400 mb-2">4</div>
            <div className="text-gray-400 text-sm">IBM Backends</div>
          </div>
          <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/5">
            <div className="text-3xl font-bold text-green-400 mb-2">8.5K+</div>
            <div className="text-gray-400 text-sm">Executions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
