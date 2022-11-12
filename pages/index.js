import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useMovie } from '../contexts/ApiContext'
import FilmSection from '../components/FilmSection'
import Banner from '../components/Banner'
import SpinnerLoad from '../components/SpinnerLoad'

export default function Home() {
  const { state } = useMovie()
  console.log(state)
  const movie = state?.movie

  return (
    <div className={styles.container}>
      <Head>
        <title>Campflix | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <main>
        {movie?.length < 1 ? <SpinnerLoad /> : (<Banner films={movie}/>)}
        {movie?.length < 1 ? <SpinnerLoad /> : (<FilmSection films={movie}/>)}
      </main>
    </div>
  )
}
