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
    title: 'Full Stack Software Developer · Innovation Team',
    org: 'AAA (ACG Labs)',
    period: '2023 — Present',
    blurb:
      'Build LLM-driven internal platforms — fraud detection for insurance underwriters, end-to-end SDLC automation with human-in-the-loop feedback gates — alongside embedded safety hardware like a roadside collision-warning unit for road crews.',
  },
  {
    title: 'Software Engineer and Consultant',
    org: 'Gearig Software and Consulting',
    period: '2013 — 2023',
    blurb:
      'Built warehouse fulfillment software end-to-end — a novel bin-packing algorithm paired with reverse-engineered shipping-rate APIs to box every order at lowest cost, a path-finding system that cut picker travel by 4+ hours a week, and a battery-backed distributed printing stack with custom drivers, device failover, and power-outage resilience.',
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
