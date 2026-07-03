'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useReveal } from '@/lib/motion-variants'

export function CoachSection() {
  const { container, item } = useReveal()

  return (
    <section id="coach" className="bg-base-surface py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={item}
            className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden border border-base-border shrink-0"
          >
            <Image
              src="/coach.jpg"
              alt="Coach Marcus Hale"
              fill
              className="object-cover"
              sizes="192px"
            />
          </motion.div>

          <motion.div variants={item} className="text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full border border-base-border bg-base text-ink-muted text-sm font-semibold mb-4">
              Your Coach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-2">Marcus Hale</h2>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <li className="px-3 py-1 rounded-full border border-base-border bg-base text-ink-muted text-xs font-semibold">
                NASM-CPT
              </li>
              <li className="px-3 py-1 rounded-full border border-base-border bg-base text-ink-muted text-xs font-semibold">
                Precision Nutrition L1
              </li>
            </ul>
            <p className="text-ink-muted leading-relaxed">
              Former collegiate athlete helping busy professionals get lean without living in the gym.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
