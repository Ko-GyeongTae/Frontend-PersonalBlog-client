import { Header, Item } from "semantic-ui-react"
import Gnb from "./Gnb"
import styles from './Top.module.css'

export default function Top() {
    return (
        <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', paddingTop: 40}}>
                <Header as="h1">NEON</Header>
            </div>
            <Gnb />
        </div>
    );
}