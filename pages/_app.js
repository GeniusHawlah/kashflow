import { Fragment } from 'react';
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/section-1.css'
import '../styles/section-2.css'
import '../styles/section-3.css'
import '../styles/section-4.css'
import '../styles/footer.css'

function MyApp({ Component, pageProps }) {
  return <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
