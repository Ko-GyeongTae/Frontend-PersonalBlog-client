import { AppProps } from 'next/app';
import Top from '../src/components/Top';
import Bottom from '../src/components/Bottom';
import 'semantic-ui-css/semantic.min.css';
import style from './app.module.css';
import Sidebar from '../src/components/Sidebar';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <div style={{ width: '1000 auto', height: 'auto' }}>
        <Sidebar />
        <div style={{ width: 1000, margin: '0 auto', alignContent: 'center' }}>
          <Top />
          <Component {...pageProps} />
          <Bottom />
        </div>
      </div>
    </>
  )
}

export default MyApp