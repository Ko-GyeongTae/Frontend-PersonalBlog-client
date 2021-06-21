import { getBadges } from '../../pages/api/getBadge'
import style from './Post.module.css'

export default function Post(props) {

    return (
        <a href={`${props.html_url}`}>
            <div className={style.post}>
                <div className={style.image}>
                    <img src={`${getBadges(props?.language?.toLowerCase())}`} alt='logo' style={{ display: 'block', width: 140 }} />
                </div>
                <div className={style.content}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    )
}