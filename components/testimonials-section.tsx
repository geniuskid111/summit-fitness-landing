'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { useReveal } from '@/lib/motion-variants'

const testimonials = [
  {
    name: 'Sarah M.',
    result: 'Lost 15 lbs in 8 weeks',
    photo: '/client-1.jpg',
    rating: 5,
    quote: 'Lost 15 lbs in 8 weeks. The meal plans alone were worth it.',
  },
  {
    name: 'James K.',
    result: 'Daily coach accountability',
    photo: '/client-2.jpg',
    rating: 5,
    quote: "Best investment I've made. My coach checks in every single day.",
  },
  {
    name: 'Priya R.',
    result: 'Couch to 5K in 3 months',
    photo: '/client-3.jpg',
    rating: 5,
    quote: 'Went from couch to 5K in 3 months. Never thought I could do this.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { container, item } = useReveal()

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-base-border bg-base-surface text-ink-muted text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink text-balance mb-4">
            Stories from the Summit Community
          </h2>
          <p className="text-ink-muted text-lg max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what real clients say about their transformation.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={item}
              className="relative rounded-2xl p-8 bg-base-surface border border-base-border flex flex-col gap-5 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-base-border flex-shrink-0" aria-hidden="true" />

              <StarRating count={t.rating} />

              <blockquote className="text-ink-muted leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author + photo */}
              <footer className="flex items-center gap-3 pt-2 border-t border-base-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-base-border flex-shrink-0">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-ink font-semibold text-sm">{t.name}</p>
                  <p className="text-ink-muted text-xs font-medium">{t.result}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
