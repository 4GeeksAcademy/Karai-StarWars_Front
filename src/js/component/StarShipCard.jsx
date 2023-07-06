import React, { useState } from "react";
import LearnMoreShips from "./LearnMoreShips.jsx"
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"


const PlanetsCard = ({starShip}) => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <div>
                <div className={`card ${styles.cardsStyleShips}`}>
                    <div className="card-body" style={{height: "auto"}}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/starships/${starShip.result.uid}.jpg`}
                            className="card-img-top" 
                            alt="..."
                        />
                        <h5 className="card-title" style={{marginTop: "10px", height: "40px"}}>{starShip.result.properties.name}</h5>
                        <p className="card-text" style={{ height: "35px"}}>Model: {starShip.result.properties.model}</p>
                        <p className="card-text">Crew: {starShip.result.properties.crew}</p>
                        <div className={styles.cardBtn}>
                            <button onClick={() => actions.detailsToShowShips(starShip)} href="" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalShips">Learn More</button>
                            <button onClick={() => actions.addFavorite(starShip)} style={{backgroundColor: "transparent"}} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {
                store.isModalOpenShips &&
                <LearnMoreShips/>
            }
        </div>
    )
}

export default PlanetsCard