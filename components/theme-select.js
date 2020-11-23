const { isResSent } = require('next/dist/next-server/lib/utils')

import React from 'react'
import cn from 'classnames'
import styles from './theme-select.module.css'
import { useState, useContext } from 'react'
import StoreContext from '../store'

const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark'
}
function ThemeSelect() {
  // const [selectedTheme, selectedThemeSet] = useState('{theme}')
  const store = useContext(StoreContext)
  return (
    <div className={styles.box}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name={theme}
            checked={theme === store.theme}
            onChange={(e) => store.changeTheme(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}

export default ThemeSelect
