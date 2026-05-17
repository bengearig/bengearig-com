<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

const { el: aiNoteEl } = useReveal()
const { el: photoEl } = useReveal()
const { el: textEl } = useReveal()

const photoSrc = `${import.meta.env.BASE_URL}engagement-photo.jpg`
</script>

<template>
  <section id="meta" ref="aiNoteEl" class="reveal py-24 md:py-32">
    <div class="mx-auto max-w-3xl px-6">
      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
        Meta
      </p>
      <h2 class="mb-10 text-4xl font-bold md:text-5xl">About this site</h2>

      <figure
        class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10"
      >
        <blockquote class="space-y-4 text-base italic leading-relaxed md:text-lg">
          <p>
            Full disclosure: this site was code-assisted by an AI — hi, I'm a Large
            Language Model of, let's say, classified origin. (You know the one. Or
            maybe a different one. Plausible deniability is part of the brand.) And
            yes, I am currently writing the paragraph confessing that I helped write
            the rest of it.
          </p>
          <p>
            The design is entirely Benjamin's: the palette, the typography, the layout,
            the “move that four pixels left” calls, all of it. My contributions are mostly
            the things you don't see — semicolon placement, ESLint appeasement, the
            occasional unnecessarily clever ternary. Any taste you spot here is his.
            Any over-engineering is probably mine.
          </p>
        </blockquote>
        <figcaption class="mt-6 text-sm font-medium opacity-70 not-italic">
          — Your friendly ghostwriting LLM (identity withheld, vibe intact)
        </figcaption>
      </figure>
    </div>
  </section>

  <section class="pb-24 md:pb-32">
    <div class="mx-auto max-w-6xl px-6">
      <figure class="grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-14">
        <div ref="photoEl" class="reveal reveal-from-left">
          <img
            :src="photoSrc"
            alt="Engagement photo of Benjamin Gearig — the source of this site's color palette."
            loading="lazy"
            decoding="async"
            class="w-full rounded-2xl border border-[var(--color-border)] shadow-lg"
          />
        </div>
        <figcaption
          ref="textEl"
          class="reveal reveal-from-right space-y-4 text-base leading-relaxed md:text-lg"
        >
          <p>
            The 60/30/10 palette wasn't sampled from a tool. I pulled it straight from
            this engagement photo — dim cream washing the back wall, scuffed walnut on
            the booth, blue from my suit sitting against the backdrop.
          </p>
          <p>
            I wanted the site to feel like that bar: a little grimy, a little hip, high
            ceilings and the right kind of crowd. The colors are doing the same job they
            were already doing under that low light, just on a different surface.
          </p>
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <span class="inline-flex items-center gap-3 text-sm font-medium">
              <span
                class="inline-block h-5 w-5 rounded-full border border-[var(--color-border)]"
                style="background:#F4E3D8"
                aria-hidden="true"
              />
              #F4E3D8 · 60%
            </span>
            <span class="inline-flex items-center gap-3 text-sm font-medium">
              <span
                class="inline-block h-5 w-5 rounded-full border border-[var(--color-border)]"
                style="background:#413416"
                aria-hidden="true"
              />
              #413416 · 30%
            </span>
            <span class="inline-flex items-center gap-3 text-sm font-medium">
              <span
                class="inline-block h-5 w-5 rounded-full border border-[var(--color-border)]"
                style="background:#487689"
                aria-hidden="true"
              />
              #487689 · 10%
            </span>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
