<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useScrollSpy } from '@/composables/useScrollSpy'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
  { id: 'meta', label: 'Meta' },
] as const

const { activeId } = useScrollSpy(links.map((l) => l.id))

const open = ref(false)
const close = () => (open.value = false)
const toggle = () => (open.value = !open.value)

const onResize = () => {
  if (window.innerWidth >= 768) close()
}

onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_85%,transparent)] backdrop-blur"
  >
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a
        href="#hero"
        class="font-display text-xl font-bold tracking-tight hover:text-[var(--color-accent)]"
        @click="close"
      >
        Benjamin Gearig
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="[
              'text-sm font-medium transition-colors',
              activeId === link.id
                ? 'text-[var(--color-accent)]'
                : 'hover:text-[var(--color-accent)]',
            ]"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        type="button"
        class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-[var(--color-surface)]"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <template v-if="open">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </template>
          <template v-else>
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </template>
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="open"
        id="mobile-menu"
        class="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]"
      >
        <ul class="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-3">
          <li v-for="link in links" :key="link.id">
            <a
              :href="`#${link.id}`"
              :class="[
                'block rounded-md px-3 py-2 text-base font-medium',
                activeId === link.id
                  ? 'text-[var(--color-accent)] bg-[var(--color-surface)]'
                  : 'hover:bg-[var(--color-surface)]',
              ]"
              @click="close"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
