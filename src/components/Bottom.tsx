import style from './Bottom.module.css'

export default function Bottom() {

    return (
        <div style={{ width: '100%', height: 10 }}>
            <div className="ocean" style={{ width: '100%', position: 'relative' }}>
                <div className={style.wave}></div>
                <div className={style.wave}></div>
            </div>
        </div>
    )
}