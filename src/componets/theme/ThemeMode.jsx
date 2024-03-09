'use client'
import React, { useContext } from 'react';
import styles from "./theme.module.css"
import { ThemeContext } from '../../context/ThemeContext';

const ThemeMode = () => {
  const {togle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={togle}>
        <div className={styles.ball}
        style={mode === "light"? {left:"2px"} : {right:"2px"}}/>
    </div>
  )
}

export default ThemeMode