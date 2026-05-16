import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useScrollSpy(ids: readonly string[]) {
  const activeId = ref<string>(ids[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null)
    if (sections.length === 0) return

    const visibility = new Map<string, number>()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio)
        }
        let best: { id: string; ratio: number } | null = null
        for (const [id, ratio] of visibility) {
          if (ratio > 0 && (best === null || ratio > best.ratio)) {
            best = { id, ratio }
          }
        }
        if (best) activeId.value = best.id
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-40% 0px -55% 0px',
      },
    )

    for (const section of sections) observer.observe(section)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return { activeId }
}
