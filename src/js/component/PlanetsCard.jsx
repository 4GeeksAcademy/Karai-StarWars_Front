import React, { useState } from "react";
import LearnMorePlanets from "./LearnMorePlanets.jsx"
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"


const PlanetsCard = ({planets}) => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <div>
                <div className={`card ${styles.cardsStylePlanets}`}>
                    <div className="card-body">
                        <img
                            src={planets.image_url}
                            className="card-img-top"
                            alt="..."
                        />
                        <h5 className="card-title" style={{marginTop: "10px"}}>{planets.name}</h5>
                        <p className="card-text">Diameter: {planets.diameter} km</p>
                        <p className="card-text">Climate: {planets.climate}</p>
                        <div className={styles.cardBtn}>
                        <button onClick={() => actions.detailsToShowPlanets(planets)} className={styles.learnMore}>Learn More</button>                            
                        <button onClick={() => actions.addFavoritePlanet(planets)} style={{backgroundColor: "transparent"}} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
                <LearnMorePlanets/>
        </div>
    )
}

export default PlanetsCard