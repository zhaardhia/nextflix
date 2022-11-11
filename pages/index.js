import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useMovie } from '../contexts/ApiContext'
import CardFilm from '../components/CardFilm'
import FilmSection from '../components/FilmSection'

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
        <FilmSection films={movie}/>
      </main>
    </div>
  )
}
