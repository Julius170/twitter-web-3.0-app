import '../styles/global.css'
import '../lib/hexStyle.css'
import {TwitterProvider} from '../context/TwitterContext'


function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Component  {...pageProps}/>
    </TwitterProvider>
  )
}

export default MyApp
