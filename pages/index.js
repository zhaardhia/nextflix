import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useMovie } from '../contexts/ApiContext'
import FilmSection from '../components/FilmSection'
import Banner from '../components/Banner'

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
        <Banner films={movie}/>
        <FilmSection films={movie}/>
      </main>
    </div>
  )
}
