'use client'

export default function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">What People Are Saying</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
              <p className="text-gray-300 mb-4 italic">
                "Incredible mobile quantum computing experience..."
              </p>
              <div className="text-sm text-gray-400">— Quantum Researcher</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
