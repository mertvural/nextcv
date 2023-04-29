import Head from 'next/head'
import '@/styles/globals.css'
import { Roboto_Condensed } from 'next/font/google'
const font = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={font.className}>
       <Head>
        <title>NextCV</title>
      </Head>
    

      <Component {...pageProps} />
    </div>
  )
}
