import style from './Profile.module.css'

export default function Profile() {
    return (
        <div style={{ width: 1000, height: 2000 }}>
            <div >
                <img className={style.img} src={'https://avatars.githubusercontent.com/u/61784451?v=4'}></img>
            </div>
        </div>
    )
}