import { AppProps } from 'next/app';
import Top from '../src/components/Top';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: '0 auto', alignContent: 'center'}}>
      <Top />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp