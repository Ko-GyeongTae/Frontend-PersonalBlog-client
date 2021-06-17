import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import style from './index.module.css'
import { Header, Grid, Checkbox } from 'semantic-ui-react'

export default function Home() {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <div className={style.Container}>
      <Head>
        <title>NEON | HOME</title>
      </Head>
      <div className={style.Container}>
        <div className={style.begin} style={{
        backgroundPositionY : position / -1.2
      }}>
        <div>
          <h1 className={style.titleText}>안녕하세요!</h1>
          <h2 className={style.subtitleText}>Blog Version 1.0</h2>
          </div>
        </div>
        <div className={style.desc} style={{
          transform: `translateX(${position + 100}px)`,
        }}>
          <img src={'https://blog.kakaocdn.net/dn/bojGJR/btqB2uK0pvO/iOVp5O0J8iE5mepxqSNHm0/img.png'} alt='logo' style={{ display: 'block', width: 200, paddingRight: 20 }}/>
          <div>
            <h1>Next JS!</h1>
            <p>Next JS 프레임워크로 이루어져 있습니다.</p>
          </div>
        </div>
        <div className={style.desc} style={{
          transform: `translateX(${-position +1600}px)`,
        }}>
          <img src={'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'} alt='logo' style={{ display: 'block', width: 200, paddingRight: 20 }}/>
          <div>
            <h1>Typescript!</h1>
            <p>Javascript가 아닌 Typescript를 사용했습니다.</p>
          </div>
        </div>
        <h1 style={{
            opacity: (position - 700) / 40
          }}></h1>
      </div>
    </div>


  )
}
