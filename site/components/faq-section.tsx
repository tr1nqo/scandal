'use client'

import { Reveal } from '@/components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useDict } from '@/lib/i18n'

export function FaqSection() {
  const t = useDict()

  return (
    <section id="faq" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-6 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            {t.faq.eyebrow}
            <span className="h-px w-8 bg-accent" />
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-center font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
            {t.faq.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <Accordion className="mt-14 border-t border-border">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-base font-medium md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
