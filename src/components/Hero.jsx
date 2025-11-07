import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-gray-900">
            Hi, I’m <span className="text-indigo-600">Your Name</span> —
            building playful, modern experiences.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Frontend developer specializing in React, motion, and delightful interactions.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-indigo-700">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-md font-semibold border border-black/10 hover:bg-black/5">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
