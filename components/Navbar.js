import React from 'react'
import styles from '../styles/Navbar.module.css'
import { DebounceInput } from 'react-debounce-input'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.linkHome}>Campflix</p>
      <div className={styles.listNav}>
        <DebounceInput 
          // onChange={handleInput}
          minLength={2}
          debounceTimeout={500}
          type="text" 
          name="search-bar" 
          id="search-bar"
          placeholder="Search"
          className={styles.searchBar}
        />
        <h4>Firzha Ardhia</h4>
      </div>
    </nav>
  )
}

export default Navbar