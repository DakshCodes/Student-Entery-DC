import Nav from '../components/Nav'
import '../styles/globals.css'


// create a client


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
