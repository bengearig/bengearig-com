<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import AppNav from '@/components/AppNav.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import MetaSection from '@/components/sections/MetaSection.vue'
import CookieRecipe from '@/components/CookieRecipe.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const cookieOpen = ref(false)

function openCookie() {
  cookieOpen.value = true
  history.replaceState(null, '', '#cookies')
}

function closeCookie() {
  cookieOpen.value = false
  history.replaceState(null, '', location.pathname + location.search)
}

function readHashForCookie() {
  if (location.hash === '#cookies' && !cookieOpen.value) cookieOpen.value = true
  else if (location.hash !== '#cookies' && cookieOpen.value) cookieOpen.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && cookieOpen.value) closeCookie()
}

watch(cookieOpen, (v) => {
  if (typeof document !== 'undefined') document.body.style.overflow = v ? 'hidden' : ''
})

onMounted(() => {
  readHashForCookie()
  window.addEventListener('hashchange', readHashForCookie)
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', readHashForCookie)
  window.removeEventListener('keydown', onKeydown)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <AppNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <MetaSection />
    <ContactSection />
  </main>
  <footer
    class="flex items-center justify-center gap-3 border-t border-[var(--color-border)] py-8 text-center text-sm opacity-70"
  >
    <span>© {{ new Date().getFullYear() }} Benjamin Gearig. Built with Vue + Tailwind.</span>
    <button
      type="button"
      aria-label="A slightly secret recipe"
      title="…"
      class="text-base leading-none opacity-60 transition hover:scale-110 hover:opacity-100"
      @click="openCookie"
    >
      🍪
    </button>
  </footer>
  <CookieRecipe :is-open="cookieOpen" @close="closeCookie" />
  <ThemeToggle />
</template>
