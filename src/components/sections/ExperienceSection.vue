<script setup lang="ts">
import SectionFrame from '@/components/SectionFrame.vue'

interface Role {
  title: string
  org: string
  period: string
  blurb: string
}

const roles: Role[] = [
  {
    title: '[ROLE TITLE]',
    org: '[COMPANY]',
    period: '[YYYY] — Present',
    blurb: '[What you do here. One or two sentences.]',
  },
  {
    title: '[ROLE TITLE]',
    org: '[COMPANY]',
    period: '[YYYY] — [YYYY]',
    blurb: '[What you did here. One or two sentences.]',
  },
  {
    title: '[ROLE TITLE]',
    org: '[COMPANY]',
    period: '[YYYY] — [YYYY]',
    blurb: '[What you did here. One or two sentences.]',
  },
]
</script>

<template>
  <SectionFrame id="experience" eyebrow="Experience" title="Where I've worked">
    <ol class="relative space-y-10 border-l border-[var(--color-border)] pl-8">
      <li v-for="role in roles" :key="`${role.org}-${role.period}`" class="relative">
        <span
          class="absolute -left-[2.4rem] top-1.5 inline-block h-3 w-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]"
          aria-hidden="true"
        />
        <p class="text-sm font-medium opacity-70">{{ role.period }}</p>
        <h3 class="mt-1 text-xl font-semibold">
          {{ role.title }}
          <span class="font-normal opacity-80">· {{ role.org }}</span>
        </h3>
        <p class="mt-2 text-base leading-relaxed">{{ role.blurb }}</p>
      </li>
    </ol>
  </SectionFrame>
</template>
