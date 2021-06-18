import { Header, Item, Image } from "semantic-ui-react"
import Gnb from "./Gnb"
import styles from './Top.module.css'

export default function Top() {
    return (
        <div className={styles.Container}>
            <div style={{width: 1000, height: 230,}}>
                <img
                    src={'/images/1000300.png'}
                    alt='background'
                    style={{
                        width: 1000,
                        height: 300,
                        position: "-moz-initial",
                    }}
                />
            </div>
            <div className={styles.landerImage}>
                <h1 style={{fontSize: 60, paddingLeft: 20}}>NEON</h1>
            </div>
            <Gnb />
        </div>
    );
}