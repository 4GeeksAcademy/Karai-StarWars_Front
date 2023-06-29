import React, { useState } from "react";
import LearnMore from "./LearnMore.jsx"
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"


const PlanetsCard = ({ planets, uid }) => {

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
                <div className={`card ${styles.cardsStyle}`}>
                    <div className="card-body">
                        <img
                            // style={{
                            //     objectFit: "cover",
                            //     height: "240px",
                            //     objectPosition: "top",
                            // }}
                            src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                            className="card-img-top"
                            alt="..."
                        />
                        <h5 className="card-title">{planets.name}</h5>
                        <p className="card-text">Gender: {planets.gender}</p>
                        <p className="card-text">Height: {planets.height}</p>
                        <div className="d-felx justify-content-between">
                            <button onClick={openModal} href="" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Learn More</button>
                            <button onClick={() => actions.addFavorite(planets.name)} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {
                isModalOpen &&
                <LearnMore
                    activateModal={isModalOpen}
                    closeModal={closeModal}
                    planets={planets}
                />
            }
        </div>
    )
}

export default PlanetsCard