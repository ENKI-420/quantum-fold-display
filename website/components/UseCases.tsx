'use client'

export default function UseCases() {
  const cases = [
    { title: 'Education', desc: 'Learn quantum computing anywhere' },
    { title: 'Research', desc: 'Mobile quantum experiments' },
    { title: 'Development', desc: 'Build quantum apps on-the-go' },
    { title: 'Edge Computing', desc: 'Distributed quantum processing' }
  ]

  return (
    <section className="py-24 px-4 bg-slate-950/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Use Cases</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((useCase, i) => (
            <div key={i} className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
              <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-400 text-sm">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
