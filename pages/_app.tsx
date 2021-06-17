import { AppProps } from 'next/app';
import Top from '../src/components/Top';
import Bottom from '../src/components/Bottom';
import 'semantic-ui-css/semantic.min.css';
import style from './app.module.css';
import Sidebar from '../src/components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div style={{ width: '1000, auto', height: 'auto' }}>
        <Sidebar />
        <div style={{ width: 1000, margin: '0 auto', alignContent: 'center' }}>
          <Top />
          <Component {...pageProps} />
          <Bottom />
        </div>
      </div>
  )
}

export default MyApp