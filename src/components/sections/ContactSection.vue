<script setup lang="ts">
import SectionFrame from '@/components/SectionFrame.vue'
import { resumeHref } from '@/site'

interface Social {
  label: string
  href: string
}

const email = 'contact@bengearig.com'

const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/bengearig' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-gearig-16604a257' },
  { label: 'X / Twitter', href: 'https://x.com/[USERNAME]' },
]
</script>

<template>
  <SectionFrame id="contact" eyebrow="Contact" title="Say hello">
    <p class="max-w-2xl text-lg leading-relaxed">
      The best way to reach me is by email. I'm also around on the links below. If
      you reach out, mention you found me here — I like knowing the site is doing
      its job.
    </p>

    <div class="mt-10 flex flex-col gap-6">
      <a
        :href="`mailto:${email}`"
        class="inline-flex w-fit items-center gap-3 rounded-full bg-[var(--color-walnut)] px-6 py-3 text-base font-semibold text-[var(--color-cream)] transition hover:opacity-90"
      >
        <span aria-hidden="true">✉</span>
        {{ email }}
      </a>

      <ul class="flex flex-wrap gap-4">
        <li>
          <a
            :href="resumeHref"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Resume (PDF)
          </a>
        </li>
        <li v-for="social in socials" :key="social.label">
          <a
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {{ social.label }}
          </a>
        </li>
      </ul>
    </div>
  </SectionFrame>
</template>
