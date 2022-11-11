import '../styles/globals.css'
import Layout from '../components/Layout'
import { MovieProvider } from "../contexts/ApiContext";

function MyApp({ Component, pageProps }) {
  return (
    <MovieProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MovieProvider>
  )
}

export default MyApp
