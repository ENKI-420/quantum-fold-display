import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Architecture from '@/components/Architecture'
import QuantumViz from '@/components/QuantumViz'
import Hardware from '@/components/Hardware'
import Metrics from '@/components/Metrics'
import UseCases from '@/components/UseCases'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      <Hero />
      <Features />
      <Architecture />
      <QuantumViz />
      <Hardware />
      <Metrics />
      <UseCases />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
