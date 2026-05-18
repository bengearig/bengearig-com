<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import SectionFrame from '@/components/SectionFrame.vue'
import ProjectCard from '@/components/ProjectCard.vue'

interface ProjectLink {
  label: string
  href: string
}

interface Project {
  slug: string
  title: string
  blurb: string
  tags: string[]
  description?: string
  image?: string
  links?: ProjectLink[]
}

const projects: Project[] = [
  {
    slug: 'isafety-patrol',
    title: 'iSafety Patrol',
    blurb:
      'Roadside warning device that detects oncoming collision risks and gives workers the seconds they need to move clear.',
    tags: ['Embedded C', 'Hardware', 'Sensors', 'Worker Safety'],
    description:
      'iSafety Patrol is a battery-powered roadside unit designed for roadside workers. Onboard sensors build an internal representation of desirable traffic patterns, detect anomalous exceptions to those patterns, and trigger an immediate audible and visual alert when a collision risk is detected. The goal is simple: give workers the seconds they need to step clear before impact.',
  },
  {
    slug: 'sdlc-automation-machine',
    title: 'SDLC Automation Machine',
    blurb:
      'Platform that automates the software development lifecycle from design through deployment using design-session transcripts, LLMs, and human-in-the-loop feedback gates.',
    tags: ['LLMs', 'Automation', 'Dev Tooling', 'Human-in-the-Loop'],
    description:
      'SDLC Automation Machine is a platform designed for product and engineering teams. It ingests design-session transcripts, routes them through a chain of LLM models that handle design, development, testing, and deployment, and pauses at human-in-the-loop feedback gates so the team can steer or correct course before each stage advances. Humans stay on the decisions that matter; the machine grinds through the rest.',
  },
  {
    slug: 'fraud-detection-system',
    title: 'Fraud Detection System',
    blurb:
      'Document-authenticity pipeline that uses frontier LLM models to catch fraudulent trailing documents before they cost the business.',
    tags: ['LLMs', 'Fraud Detection', 'Document Verification', 'Risk'],
    description:
      'Fraud Detection System is a platform designed for insurance underwriters. It ingests trailing documents submitted by the insured, routes them through frontier LLM models that interrogate authenticity signals, and surfaces likely forgeries to human reviewers before premiums leak out the door. Caught enough fraud in the first year to save the company millions.',
  },
]

const openSlug = ref<string | null>(null)
const animatingSlug = ref<string | null>(null)

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

async function applyState(next: string | null) {
  type DocWithVT = Document & {
    startViewTransition?: (cb: () => void | Promise<void>) => {
      finished: Promise<void>
    }
  }
  const doc = document as DocWithVT
  const supportsVT = typeof doc.startViewTransition === 'function'
  const moving = next ?? openSlug.value
  if (supportsVT && !prefersReducedMotion() && moving) {
    animatingSlug.value = moving
    await nextTick()
    const vt = doc.startViewTransition!(() => {
      openSlug.value = next
    })
    vt.finished.finally(() => {
      animatingSlug.value = null
    })
  } else {
    openSlug.value = next
  }
}

function syncHash(next: string | null) {
  const hash = next ? `#projects/${next}` : '#projects'
  history.replaceState(null, '', hash)
}

function open(slug: string) {
  const next = openSlug.value === slug ? null : slug
  applyState(next)
  syncHash(next)
}

function close() {
  applyState(null)
  syncHash(null)
}

function readHash() {
  const match = location.hash.match(/^#projects\/(.+)$/)
  if (match && projects.some((p) => p.slug === match[1])) {
    if (openSlug.value !== match[1]) applyState(match[1])
  } else if (location.hash === '' || location.hash === '#projects') {
    if (openSlug.value !== null) applyState(null)
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && openSlug.value) {
    close()
  }
}

watch(openSlug, (val) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  readHash()
  if (openSlug.value) {
    nextTick(() => {
      document.getElementById(`project-${openSlug.value}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }
  window.addEventListener('hashchange', readHash)
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', readHash)
  window.removeEventListener('keydown', onKeydown)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <SectionFrame id="projects" eyebrow="Selected work" title="Projects">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
        :is-open="openSlug === project.slug"
        :has-vt-name="animatingSlug === project.slug"
        @open="open"
        @close="close"
      />
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-to-class="opacity-0"
      >
        <div
          v-if="openSlug"
          class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
          @click="close"
        />
      </Transition>
    </Teleport>
  </SectionFrame>
</template>
