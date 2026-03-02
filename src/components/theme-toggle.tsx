import { Moon, Sun } from 'lucide-react'
import { useCallback } from 'react'

import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  const handleSetTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  return (
    <Button onClick={handleSetTheme} size="icon" variant="outline">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
