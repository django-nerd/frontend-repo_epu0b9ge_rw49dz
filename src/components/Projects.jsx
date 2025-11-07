import { useMemo } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'A data-rich dashboard with real-time charts and smooth interactions.',
    tags: ['React', 'Tailwind', 'Recharts'],
    github: 'https://github.com',
    demo: '#',
    cover: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: '3D Portfolio',
    description: 'Personal portfolio with 3D scenes powered by Spline.',
    tags: ['Spline', 'React', 'Framer'],
    github: 'https://github.com',
    demo: '#',
    cover: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E-commerce UI',
    description: 'Elegant storefront with product filters and animations.',
    tags: ['React', 'Tailwind'],
    github: 'https://github.com',
    demo: '#',
    cover: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop',
  },
]

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  )
}

export default function Projects() {
  const rows = useMemo(() => projects, [])

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Selected Projects</h2>
            <p className="mt-2 text-gray-600">A snapshot of things I’ve built recently.</p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            Explore GitHub <Github className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((p) => (
            <article key={p.title} className="group rounded-xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <img src={p.cover} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-indigo-600">
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={p.github} className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-indigo-600">
                    Code <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
