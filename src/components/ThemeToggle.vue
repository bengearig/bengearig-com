<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, systemDark, cycle } = useTheme()

const effectiveDark = computed(() =>
  theme.value === 'dark' || (theme.value === 'auto' && systemDark.value),
)

const nextLabel = computed(() => {
  if (theme.value === 'auto') return 'Switch to light mode'
  if (theme.value === 'light') return 'Switch to dark mode'
  return 'Switch to auto mode'
})

const currentLabel = computed(() => {
  if (theme.value === 'auto') return `Theme: auto (${effectiveDark.value ? 'dark' : 'light'})`
  return `Theme: ${theme.value}`
})

const fullLabel = computed(() => `${currentLabel.value}. ${nextLabel.value}.`)
</script>

<template>
  <button
    type="button"
    :aria-label="fullLabel"
    :title="fullLabel"
    class="fixed bottom-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)] shadow-lg backdrop-blur transition hover:scale-105 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    @click="cycle"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 rotate-45 scale-75"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -rotate-45 scale-75"
    >
      <!-- Auto: half-and-half disc -->
      <svg
        v-if="theme === 'auto'"
        key="auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.5" />
        <path d="M10 3a7 7 0 0 0 0 14V3Z" fill="currentColor" />
      </svg>
      <!-- Light: sun -->
      <svg
        v-else-if="theme === 'light'"
        key="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M10 2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2.5Zm0 12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15Zm7.5-5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.75 10a.75.75 0 0 1-.75.75H2.5a.75.75 0 0 1 0-1.5H4a.75.75 0 0 1 .75.75Zm10.96-5.71a.75.75 0 0 1 0 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0ZM6.41 13.59a.75.75 0 0 1 0 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0Zm9.3 1.06a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06ZM6.41 6.41a.75.75 0 0 1-1.06 0L4.29 5.35a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        />
      </svg>
      <!-- Dark: moon -->
      <svg
        v-else
        key="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M17.293 13.293a8 8 0 0 1-10.586-10.586 8.001 8.001 0 1 0 10.586 10.586Z"
        />
      </svg>
    </Transition>
  </button>
</template>
