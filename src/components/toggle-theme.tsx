"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='rounded-md w-10 h-10 hover:bg-secondary/20 dark:hover:bg-secondary transition-colors cursor-pointer inline-flex items-center justify-center'
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
