<script setup lang="ts">
import SectionFrame from '@/components/SectionFrame.vue'

interface Project {
  title: string
  blurb: string
  href: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: '[PROJECT ONE]',
    blurb: '[One-sentence description of what it is and why it matters.]',
    href: '#',
    tags: ['[Tag]', '[Tag]'],
  },
  {
    title: '[PROJECT TWO]',
    blurb: '[One-sentence description of what it is and why it matters.]',
    href: '#',
    tags: ['[Tag]', '[Tag]'],
  },
  {
    title: '[PROJECT THREE]',
    blurb: '[One-sentence description of what it is and why it matters.]',
    href: '#',
    tags: ['[Tag]', '[Tag]'],
  },
]
</script>

<template>
  <SectionFrame id="projects" eyebrow="Selected work" title="Projects">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.href"
        class="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-accent)] hover:shadow-lg"
      >
        <h3 class="text-xl font-semibold group-hover:text-[var(--color-accent)]">
          {{ project.title }}
        </h3>
        <p class="mt-3 flex-1 text-base leading-relaxed">{{ project.blurb }}</p>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium opacity-80"
          >
            {{ tag }}
          </li>
        </ul>
      </a>
    </div>
  </SectionFrame>
</template>
