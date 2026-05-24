import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'auto'
const STORAGE_KEY = 'theme'

function systemPrefersDark(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

function readInitial(): Theme {
  if (typeof window === 'undefined') return 'auto'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark' || saved === 'auto') return saved
  return 'auto'
}

function apply(theme: Theme) {
  if (typeof document === 'undefined') return
  if (theme === 'auto') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

export function useTheme() {
  const theme = ref<Theme>(readInitial())
  const systemDark = ref(systemPrefersDark())

  function cycle() {
    theme.value =
      theme.value === 'auto' ? 'light' : theme.value === 'light' ? 'dark' : 'auto'
  }

  let mediaQuery: MediaQueryList | null = null
  function onSystemChange(e: MediaQueryListEvent) {
    systemDark.value = e.matches
  }

  watch(
    theme,
    (next) => {
      apply(next)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, next)
      }
    },
    { immediate: true },
  )

  onMounted(() => {
    if (typeof window === 'undefined') return
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', onSystemChange)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', onSystemChange)
    mediaQuery = null
  })

  return { theme, systemDark, cycle }
}
