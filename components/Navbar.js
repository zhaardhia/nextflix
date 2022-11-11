import React, { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import { DebounceInput } from 'react-debounce-input'
import Link from 'next/link'
import { useMovie } from '../contexts/ApiContext';

const Navbar = () => {
  const {fetchMovie} = useMovie()
  const [searchVal, setSearchVal] = useState('');

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  }

  useEffect(() => {
    fetchMovie(searchVal)
  }, [searchVal])

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.linkHome}>Campflix</Link>
      <div className={styles.listNav}>
        <DebounceInput 
          onChange={handleInput}
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