'use client'

export default function QuantumViz() {
  const modes = [
    'Consciousness Meter',
    'Bloch Sphere',
    'Circuit Diagram',
    'Entanglement Graph',
    'Consciousness Heatmap',
    'Quantum Fossils'
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-white">6 Visualization Modes</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {modes.map((mode, i) => (
            <div key={i} className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
              <span className="text-purple-200">{mode}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
