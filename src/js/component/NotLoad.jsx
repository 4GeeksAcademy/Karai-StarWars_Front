import React from 'react'
import Fondo from '../../img/49925.png'
import styles from "./Styles.module.css"

const notLoad = () => {

    return (
        <div style={{ position: 'relative', height: '100%' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={Fondo}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.loadingCircle}></div>
            </div>
        </div>
    )
}

export default notLoad