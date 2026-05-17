<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'
import { resumeHref } from '@/site'

const { el } = useReveal()
</script>

<template>
  <section
    id="hero"
    ref="el"
    class="reveal flex min-h-[calc(100svh-4rem)] items-center py-24 md:py-32"
  >
    <div class="mx-auto max-w-5xl px-6">
      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Hi, I'm
      </p>
      <h1 class="text-5xl font-bold leading-[1.05] md:text-7xl">
        Benjamin Gearig
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
        Shipping production software, from firmware to the cloud. Lately, the systems
        around frontier models — built to survive (and thrive) past the demo.
      </p>
      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          class="rounded-full bg-[var(--color-walnut)] px-6 py-3 text-sm font-semibold text-[var(--color-cream)] transition hover:opacity-90"
        >
          See my work
        </a>
        <a
          href="#contact"
          class="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Get in touch
        </a>
        <a
          :href="resumeHref"
          target="_blank"
          rel="noopener"
          class="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Resume (PDF)
        </a>
      </div>
    </div>
  </section>
</template>
