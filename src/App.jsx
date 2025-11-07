import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">About Me</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I craft digital experiences with a focus on clarity, performance, and playfulness. My toolkit includes React, TypeScript, Tailwind, and motion libraries. I love building interfaces that feel alive and intuitive.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Beyond code, I enjoy exploring generative art and 3D on the web. I’m always experimenting with new ideas to push the boundaries of what’s possible in the browser.
              </p>
            </div>
            <div className="grid gap-3 content-start">
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-sm text-gray-600">Skills</p>
                <p className="mt-2 font-medium">React, TypeScript, Tailwind, Framer Motion, Spline, Node</p>
              </div>
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-sm text-gray-600">Currently learning</p>
                <p className="mt-2 font-medium">Three.js, WebGL shaders</p>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
