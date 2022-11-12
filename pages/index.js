import Head from 'next/head'
import { useMovie } from '../contexts/ApiContext'
import FilmSection from '../components/FilmSection'
import Banner from '../components/Banner'
import SpinnerLoad from '../components/SpinnerLoad'

export default function Home() {
  const { state } = useMovie()
  const movie = state?.movie

  return (
    <div>
      <Head>
        <title>Campflix | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <main>
        {movie?.length < 1 ? <SpinnerLoad /> : (<Banner />)}
        {movie?.length < 1 ? <SpinnerLoad /> : (<FilmSection films={movie}/>)}
      </main>
    </div>
  )
}
