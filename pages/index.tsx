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
        backgroundPositionY : position / -3
      }}>
          <h1 className={style.titleText}>안녕하세요!</h1>
          <h2 className={style.subtitleText}>Blog Version 1.0</h2>
        </div>
        <div className={style.desc}>
          <p style={{
          transform: `translateX(${position}px)`,
        }}>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p style={{
            opacity: (position - 700) / 40
          }}>홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
          <p>홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀홀</p>
        </div>
      </div>
    </div>


  )
}
