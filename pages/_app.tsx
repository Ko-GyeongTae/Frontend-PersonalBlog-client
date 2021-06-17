import { AppProps } from 'next/app';
import Top from '../src/components/Top';
import Bottom from '../src/components/Bottom';
import 'semantic-ui-css/semantic.min.css';
import style from './app.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div style={{ width: '1000, auto', height: 'auto' }}>
        <div className={ style.side }>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home</a>
            </li>
          </ul>
        </div>
        <div style={{ width: 1000, margin: '0 auto', alignContent: 'center' }}>
          <Top />
          <Component {...pageProps} />
          <Bottom />
        </div>
      </div>
  )
}

export default MyApp