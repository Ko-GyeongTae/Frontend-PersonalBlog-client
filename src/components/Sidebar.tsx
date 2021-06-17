import style from './Sidebar.module.css'

export default function Sidebar() {

    return (
        <div className={style.side}>
            <div className={style.sideInner}>
                <h1>MENU</h1>
                <a href={'/'}>
                    <div className={style.sideInnerBox}>
                        <h2>처음으로</h2>
                    </div>
                </a>
                <a href={'/Profile'}>
                    <div className={style.sideInnerBox}>
                        <h2>개발자소개</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}