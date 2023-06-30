import React, { useState } from "react";
import LearnMoreShips from "./LearnMoreShips.jsx"
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"


const PlanetsCard = ({ starShip, uid }) => {

    const { sotre, actions } = useContext(Context)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <div>
                <div className={`card ${styles.cardsStyleShips}`}>
                    <div className="card-body" style={{height: "auto"}}>
                        <img
                            // style={{
                            //     objectFit: "cover",
                            //     height: "240px",
                            //     objectPosition: "top",
                            // }}
                            src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
                            className="card-img-top" 
                            alt="..."
                        />
                        <h5 className="card-title" style={{marginTop: "10px", height: "40px"}}>{starShip.name}</h5>
                        <p className="card-text" style={{ height: "35px"}}>Model: {starShip.model}</p>
                        <p className="card-text">Crew: {starShip.crew}</p>
                        <div className={styles.cardBtn}>
                            <button onClick={openModal} href="" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Learn More</button>
                            <button onClick={() => actions.addFavorite(starShip.name)} style={{backgroundColor: "transparent"}} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {
                isModalOpen &&
                <LearnMoreShips
                    activateModal={isModalOpen}
                    closeModal={closeModal}
                    starShip={starShip}
                    uid={uid}
                />
            }
        </div>
    )
}

export default PlanetsCard