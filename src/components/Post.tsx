import style from './Post.module.css'

export default function Post() {

    return (
        <div className={style.post}>
            <div className={style.image}>
                <img src={'/images/info.png'} alt='logo' style={{ display: 'block', width: 80 }}/>
            </div>
            <div className={style.content}>
                <h2>Title</h2>
                <p>description</p>
            </div>
        </div>
    )
}