'use client'

export default function Metrics() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Performance Benchmarks</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">120 FPS</div>
            <div className="text-gray-400">Sustained rendering</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">&lt;8ms</div>
            <div className="text-gray-400">95th percentile latency</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">+8%</div>
            <div className="text-gray-400">Battery overhead</div>
          </div>
        </div>
      </div>
    </section>
  )
}
