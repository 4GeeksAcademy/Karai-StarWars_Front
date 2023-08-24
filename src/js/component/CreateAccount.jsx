import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext'
import Fondo from '../../img/fondoCreateAccount.png'
import createAccountLetter from '../../img/createAccountLetter.png'
import styles from "./Styles.module.css"

const CreateAccount = () => {

    const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [username, setUsername] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [showLoadingCircle, setShowLoadingCircle] = useState(false)

    const handlerCreateUser = async () => {
        setShowLoadingCircle(true)
        const user_data = {
            username: username,
            mail: mail,
            password: password
        }
        const createUserResult = await actions.createUser(user_data)
        if (createUserResult.status == 'COMPLETED') {
            alert('User created, please login')
            navigate('/');
        }
    }

    return (
        <div style={{ position: 'relative', height: '100%' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={Fondo}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className={styles.overlay} style={{}}>
                <div>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' className={styles.loginInputs} />
                </div>
                <div>
                    <input value={mail} onChange={(e) => setMail(e.target.value)} type="text" placeholder='mail' className={styles.loginInputs} />
                </div>
                <div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' className={styles.loginInputs} />
                </div>
                <div style={{ position: 'relative', padding: '0px', margin: '0px' }}>
                    <img
                        src={createAccountLetter}
                        alt=""
                        style={{ width: '60%', padding: '20px 0px 0px 259px ' }}
                    />
                    <p onClick={() => handlerCreateUser()} className={styles.overlay} style={{ color: '#f8da2d', padding: '30px 8px 0px 0px', cursor: 'pointer' }}>_____________</p>
                    {showLoadingCircle &&
                    <div style={{ position: 'absolute', padding: '20px 0px 0px 315px ', marginBottom: '30px' }}>
                        <div className={styles.loadingCircle}></div>
                    </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default CreateAccount