import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Let’s work together</h2>
          <p className="mt-2 text-gray-600">Tell me about your project and I’ll get back to you within 24 hours.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-600 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:hello@example.com" className="font-semibold">hello@example.com</a>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">Available for freelance and full-time roles. Based in Jakarta, working worldwide.</p>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-2xl border border-black/10 bg-white p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-indigo-700">
                Send Message <Send className="h-4 w-4" />
              </button>
              {sent && <span className="text-sm text-emerald-600">Message sent! I will reply soon.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
