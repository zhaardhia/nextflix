import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useMovie } from '../contexts/ApiContext'

export default function Home() {
  const { state } = useMovie()
  console.log(state)
  const movie = state?.movie
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <main>
        
      </main>
    </div>
  )
}
