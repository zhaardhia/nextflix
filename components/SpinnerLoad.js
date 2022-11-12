import React from 'react'
import styles from '../styles/SpinnerLoad.module.css'

const SpinnerLoad = () => {
  return (
    <div className={[styles["grow-pulse"], styles.spinner].join(" ")}></div>
  )
}

export default SpinnerLoad