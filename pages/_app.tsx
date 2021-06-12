import { AppProps } from 'next/app';
import Top from '../src/components/Top';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: '0 auto'}}>
      <Top />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp