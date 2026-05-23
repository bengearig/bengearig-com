<script setup lang="ts">
import SectionFrame from '@/components/SectionFrame.vue'

const photoSrc = `${import.meta.env.BASE_URL}benjamin-gearig.jpg`
</script>

<template>
  <SectionFrame id="about" eyebrow="About" title="A bit about me">
    <div class="grid gap-10 md:grid-cols-[1fr_2fr]">
      <img
        :src="photoSrc"
        alt="Benjamin Gearig"
        loading="lazy"
        decoding="async"
        class="aspect-square w-full max-w-xs rounded-2xl border border-[var(--color-border)] object-cover shadow-lg"
      />
      <div class="space-y-4 text-base leading-relaxed md:text-lg">
        <p>
          I'm a software engineer on the Innovation Team at ACG Labs, and I'm based in
          Knoxville, TN. Day-to-day, I might be wiring LLMs into a fraud detection pipeline,
          shaping a mobile payment flow, or debugging firmware on an embedded safety
          device. Fifteen years on, equally at home in Go, Python, or embedded C.
        </p>
        <p>
          Outside the editor you may find me engineering household solutions with a Bambu Lab P1S and
          the occasional soldering iron, listening to my growing record collection on my Fluance RT82 turntable,
          or hunting the local food scene for the best meal I can find. I also hold strong
          opinions on product design and engineering, and I'm rarely shy about sharing
          them.
        </p>
      </div>
    </div>
  </SectionFrame>
</template>
