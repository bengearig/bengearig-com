<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <AppNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <footer class="border-t border-[var(--color-border)] py-8 text-center text-sm opacity-70">
    © {{ new Date().getFullYear() }} Benjamin Gearig. Built with Vue + Tailwind.
  </footer>
</template>
