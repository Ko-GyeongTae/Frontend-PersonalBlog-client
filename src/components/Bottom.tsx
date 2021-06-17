import style from './Bottom.module.css'

export default function Bottom() {

    return (
        <div className="ocean" style={{ width: '100%', position: 'relative' }}>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
        </div>
    )
}