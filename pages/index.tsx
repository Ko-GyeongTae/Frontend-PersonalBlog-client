import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import style from './index.module.css'

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
          backgroundPositionY: position / -1.2
        }}>
          <div>
            <h1 className={style.titleText}>안녕하세요!</h1>
            <h2 className={style.subtitleText}>Blog Version 1.0</h2>
          </div>
        </div>
        <div className={style.desc} style={{
          transform: `translateX(${position}px)`
        }}>
          <img src={'https://blog.kakaocdn.net/dn/bojGJR/btqB2uK0pvO/iOVp5O0J8iE5mepxqSNHm0/img.png'} alt='logo' style={{ display: 'block', width: 200, paddingRight: 20, overflow: 'hidden', objectFit: 'scale-down' }} />
          <div>
            <h1>Next JS!</h1>
            <p>Next JS 프레임워크로 이루어져 있습니다.</p>
          </div>
        </div>
        <div className={style.desc} style={{
          transform: `translateX(${-position + 1500}px)`
        }}>
          <img src={'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'} alt='logo' style={{ display: 'block', width: 200, paddingRight: 20, overflow: 'hidden', objectFit: 'scale-down' }} />
          <div>
            <h1>Typescript!</h1>
            <p>Javascript가 아닌 Typescript를 사용했습니다.</p>
          </div>
        </div>
        <div>
          <h1
            style={{
              opacity: (position - 900) / 200,
              transform: `translateX(${position - 950}px)`,
              color: 'black',
              fontSize: 60,
              marginBottom: 50
            }}>심플한 포트폴리오!
          </h1>
        </div>
        <div className={style.begin_repo}
          style={{
            opacity: (position - 1020) / 100,
            backgroundPositionY: position / -15,
            paddingTop: 40,
            textAlign: 'center',
            textJustify: '-moz-initial',
          }}
        >
          <h3 style={{ fontSize: 40, color: 'white' }}>카테고리별 레포지토리를 한눈에!</h3>
          <p style={{ fontSize: 20, color: 'white'}}>Github openAPI를 사용하여 좀더 정리된 레포지토리를 제공합니다.</p>
          <p style={{ fontSize: 20, color: 'white'}}>각 레포지토리는 깃허브와 연결되어있습니다.</p>
        </div>
      </div>
    </div>

  )
}
