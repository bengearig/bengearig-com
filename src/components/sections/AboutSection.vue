<script setup lang="ts">
import SectionFrame from '@/components/SectionFrame.vue'
</script>

<template>
  <SectionFrame id="about" eyebrow="About" title="A bit about me">
    <div class="grid gap-10 md:grid-cols-[1fr_2fr]">
      <div
        class="aspect-square w-full max-w-xs rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
        aria-hidden="true"
      >
        <!-- Replace with <img src="..." alt="..." /> -->
      </div>
      <div class="space-y-4 text-base leading-relaxed md:text-lg">
        <p>
          [BIO PARAGRAPH 1 — who you are, where you are, what you do day-to-day. Replace this
          placeholder text.]
        </p>
        <p>
          [BIO PARAGRAPH 2 — interests, philosophy, what you're currently exploring. Replace this
          placeholder text.]
        </p>
      </div>
    </div>
  </SectionFrame>
</template>
