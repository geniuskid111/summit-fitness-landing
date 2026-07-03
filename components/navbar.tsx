'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Mountain } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Coach', href: '#coach' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      data-scrolled={scrolled ? '' : undefined}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent data-[scrolled]:bg-base/80 data-[scrolled]:backdrop-blur-md data-[scrolled]:border-b data-[scrolled]:border-base-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-base-surface border border-base-border flex items-center justify-center">
              <Mountain className="w-5 h-5 text-ink" strokeWidth={2.5} />
            </div>
            <span className="text-ink font-bold text-lg tracking-tight">
              Summit Fitness<span className="text-ink"> Coaching</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-muted hover:text-ink text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-volt text-cta-text text-sm font-semibold hover:bg-volt-hover transition-colors duration-200"
            >
              Book Free Consultation
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-ink p-2"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-base-surface border-t border-base-border px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink-muted hover:text-ink font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-volt text-cta-text font-semibold hover:bg-volt-hover transition-colors"
            >
              Book Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
