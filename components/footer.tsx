import { Mountain } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-base border-t border-base-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-base-surface border border-base-border flex items-center justify-center">
              <Mountain className="w-5 h-5 text-ink" strokeWidth={2.5} />
            </div>
            <span className="text-ink font-bold text-lg">
              Summit Fitness Coaching
            </span>
          </div>

          {/* Links — real section anchors only */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
            <a href="#services" className="hover:text-ink transition-colors">Services</a>
            <a href="#coach" className="hover:text-ink transition-colors">Coach</a>
            <a href="#testimonials" className="hover:text-ink transition-colors">Results</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-base-border text-center text-ink-muted text-sm">
          <p>&copy; 2026 Summit Fitness Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
