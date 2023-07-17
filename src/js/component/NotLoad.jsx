import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Fondo from '../../img/fondo.png'
import styles from "./Styles.module.css"

const notLoad = () => {

    // const navigate = useNavigate();

    // const createAccountClick = () => {
    //   navigate('/Createaccount');
    // };

    return (
        <div style={{ position: 'relative', height: '100%' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={Fondo}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className={styles.overlay} style={{ paddingBottom: '305px' }}>
                <Link to="/CreateAccount" className="nav-link active" aria-current="page">
                    <p style={{ color: '#f8da2d' }}>____________________</p>
                </Link>
            </div>
            <div className={styles.overlay}>
                <div>
                    <input type="text" placeholder='mail' className={styles.loginInputs} />
                </div>
                <div>
                    <input type="text" placeholder='password' className={styles.loginInputs} />
                </div>
            </div>
        </div>
    )
}

export default notLoad