import { Moon, Sun } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'vite-ui-theme'

const getInitialTheme = (): Theme => {
  if (typeof globalThis.document === 'undefined') {
    return 'light'
  }
  return globalThis.document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = globalThis.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const handleSetTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <Button onClick={handleSetTheme} size="icon" variant="outline">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
