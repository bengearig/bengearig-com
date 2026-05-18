<script setup lang="ts">
import { computed } from 'vue'

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

const props = defineProps<{
  project: Project
  isOpen: boolean
  hasVtName: boolean
}>()

const emit = defineEmits<{
  open: [slug: string]
  close: []
}>()

const panelId = computed(() => `project-panel-${props.project.slug}`)
const titleId = computed(() => `project-title-${props.project.slug}`)
const cardId = computed(() => `project-${props.project.slug}`)
const vtName = computed(() =>
  props.hasVtName ? `view-transition-name: project-card-${props.project.slug}` : ''
)

function onHeaderClick() {
  if (!props.isOpen) emit('open', props.project.slug)
}

function onClose() {
  emit('close')
}
</script>

<template>
  <Teleport to="body" :disabled="!isOpen">
  <article
    :id="cardId"
    :style="vtName"
    class="bg-[var(--color-surface)] transition-[border-color,box-shadow] duration-200"
    :class="
      isOpen
        ? 'fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-3xl border-2 border-[var(--color-accent)] shadow-2xl'
        : 'rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-lg'
    "
  >
    <button
      type="button"
      class="group relative flex w-full flex-col text-left"
      :class="isOpen ? 'cursor-default p-8 pb-6' : 'h-full p-6'"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="onHeaderClick"
    >
      <h3
        :id="titleId"
        class="font-semibold transition-colors"
        :class="
          isOpen
            ? 'text-2xl text-[var(--color-accent)] md:text-3xl'
            : 'text-xl group-hover:text-[var(--color-accent)]'
        "
      >
        {{ project.title }}
      </h3>
      <p
        class="leading-relaxed"
        :class="isOpen ? 'mt-4 text-base md:text-lg' : 'mt-3 flex-1 text-base'"
      >
        {{ project.blurb }}
      </p>
      <ul class="mt-5 flex flex-wrap gap-2">
        <li
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium opacity-80"
        >
          {{ tag }}
        </li>
      </ul>
    </button>

    <button
      v-if="isOpen"
      type="button"
      aria-label="Close project details"
      class="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      @click="onClose"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      :id="panelId"
      role="region"
      :aria-labelledby="titleId"
      data-project-panel
      class="px-8 pb-8"
    >
      <div class="border-t border-[var(--color-border)] pt-6">
        <p v-if="project.description" class="text-base leading-relaxed md:text-lg">
          {{ project.description }}
        </p>

        <div v-if="project.image" class="mt-6">
          <img
            :src="project.image"
            :alt="project.title"
            loading="lazy"
            decoding="async"
            class="aspect-video w-full rounded-xl border border-[var(--color-border)] object-cover"
          />
        </div>
        <div
          v-else
          class="mt-6 flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] text-sm opacity-50"
        >
          Image coming soon
        </div>

        <ul
          v-if="project.links && project.links.length"
          class="mt-6 flex flex-wrap gap-3"
        >
          <li v-for="link in project.links" :key="link.href">
            <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)] px-4 py-1.5 text-sm font-medium text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
            >
              {{ link.label }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5Z"
                />
                <path
                  d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>
  </Teleport>
</template>
