<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const titleId = 'cookie-recipe-title'

function onClose() {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        @click="onClose"
      />
    </Transition>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 scale-95"
    >
      <article
        v-if="isOpen"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        class="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-3xl border-2 border-[var(--color-accent)] bg-[var(--color-surface)] p-8 shadow-2xl"
      >
        <button
          type="button"
          aria-label="Close recipe"
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

        <h2
          :id="titleId"
          class="pr-10 text-2xl font-semibold text-[var(--color-accent)] md:text-3xl"
        >
          <span aria-hidden="true">🍪</span> Benjamin's Slightly Secret Cookie Recipe
        </h2>

        <p class="mt-4 text-base italic leading-relaxed opacity-80">
          [Short note about where the recipe came from / why it's slightly secret.]
        </p>

        <section class="mt-6">
          <h3 class="mb-3 text-lg font-semibold">Ingredients</h3>
          <ul class="space-y-1.5 text-base leading-relaxed">
            <li>[INGREDIENT 1]</li>
            <li>[INGREDIENT 2]</li>
            <li>[INGREDIENT 3]</li>
            <li>[INGREDIENT 4]</li>
            <li>[INGREDIENT 5]</li>
          </ul>
        </section>

        <section class="mt-6">
          <h3 class="mb-3 text-lg font-semibold">Method</h3>
          <ol class="list-inside list-decimal space-y-2 text-base leading-relaxed">
            <li>[STEP 1]</li>
            <li>[STEP 2]</li>
            <li>[STEP 3]</li>
            <li>[STEP 4]</li>
          </ol>
        </section>
      </article>
    </Transition>
  </Teleport>
</template>
