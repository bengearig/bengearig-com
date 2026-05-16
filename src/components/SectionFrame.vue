<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

defineProps<{
  id: string
  title: string
  eyebrow?: string
}>()

const { el } = useReveal()
</script>

<template>
  <section :id="id" ref="el" class="reveal py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <p
        v-if="eyebrow"
        class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]"
      >
        {{ eyebrow }}
      </p>
      <h2 class="mb-8 text-4xl font-bold md:text-5xl">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>
