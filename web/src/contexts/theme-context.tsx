import React from 'react'

enum Themes {
  DARK = 'dark',
  LIGHT = 'light'
}

type ThemeContextType = {
  theme: Themes
  switchTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
)

type ThemeProviderProps = {
  children: React.ReactNode
}

const DEFAULT_THEME = Themes.LIGHT
const THEME_KEY = 'projeto-web2.theme'

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Themes>(DEFAULT_THEME)

  React.useEffect(() => {
    const themeLocalStorage = localStorage.getItem(THEME_KEY)
    if (!themeLocalStorage) {
      localStorage.setItem(THEME_KEY, DEFAULT_THEME)
      return
    }
    setTheme(themeLocalStorage as Themes)
  }, [])

  function switchTheme() {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const { theme, switchTheme } = React.useContext(ThemeContext)
  if (!theme) {
    throw new Error('missing ThemeProvider')
  }
  return { theme, switchTheme }
}
