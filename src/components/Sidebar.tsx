import style from './Sidebar.module.css'

export default function Sidebar() {

    return (
        <div className={style.side}>
            <a href={'/'}>
                <div className={style.sideInner}>
                    <h1>처음으로</h1>
                </div>
            </a>
            <a>
                <div className={style.sideInner}>
                    <h1>개발자소개</h1>
                </div>
            </a>
        </div>
    )
}