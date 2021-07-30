import { useTheme } from '@/contexts/theme-context'
import React from 'react'
import { Moon, Sun } from 'react-feather'
import Switch from 'react-switch'

export default function ThemeSwitch() {
  const { theme, switchTheme } = useTheme()

  return (
    <Switch
      checked={theme !== 'light'}
      onChange={() => switchTheme()}
      checkedIcon={<Sun style={{ margin: '2px' }} />}
      uncheckedIcon={<Moon style={{ margin: '2px' }} />}
      height={30}
      onColor="#060404"
      offColor="#fafafa"
      offHandleColor="#ff5555"
      onHandleColor="#ff5555"
    />
  )
}
