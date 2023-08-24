import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext.js'
import Fondo from '../../img/fondo.png'
import submit from '../../img/submit.png'
import styles from "./Styles.module.css"

const notLoad = () => {

    const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [showLoadingCircle, setShowLoadingCircle] = useState(false)

    const createAccountClick = () => {
        navigate('/CreateAccount');
    };

    const handlerGetToken = async () => {
        setShowLoadingCircle(true)
        const user_data = {
            mail: mail,
            password: password
        }
        const getTokenData = await actions.getToken(user_data)
        if (getTokenData.status == 'COMPLETED'){
            actions.getCharacters()
            actions.getPlanets()
            actions.getStarShips()
            actions.getFavorites()
            localStorage.setItem("token", getTokenData.token);
            localStorage.setItem("user_id", getTokenData.user_id);
                navigate('/home');
            }
    }


    return (
        <div style={{ position: 'relative', height: '100%' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={Fondo}
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <div className={styles.overlay}>
                <div>
                    <input onChange={(e) => setMail(e.target.value)} type="text" placeholder='mail' className={styles.loginInputs} />
                </div>
                <div>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' className={styles.loginInputs} />
                </div>
                <button onClick={() => handlerGetToken()} style={{
                    height: '20px',
                    fontSize: '15px',
                    background: '#f8da2d',
                    marginTop: '10px',
                    padding: '0px 5px 0px 5px'
                }} type="button" className="btn btn-outline-dark">
                    <img style={{ height: '12px', marginBottom: '7px' }} src={submit} alt="" />
                </button>
                {showLoadingCircle &&
                    <div style={{ position: 'absolute', paddingTop: '125px' }}>
                        <div className={styles.loadingCircle}></div>
                    </div>
                }
                <p onClick={() => createAccountClick()} className={styles.createAccountClick}>____________________</p>
            </div>
        </div>
    )
}

export default notLoad