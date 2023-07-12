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
                            src={`https://starwars-visualguide.com/assets/img/planets/${planets.result.uid}.jpg`}
                            className="card-img-top"
                            alt="..."
                            onError={(e) => {
                                const uid = parseInt(planets.result.uid, 10);
                                const fallbackUid = uid + 10;
                                e.target.src = `https://starwars-visualguide.com/assets/img/planets/${fallbackUid}.jpg`;
                                e.target.onerror = null;
                              }}
                        />
                        <h5 className="card-title" style={{marginTop: "10px"}}>{planets.result.properties.name}</h5>
                        <p className="card-text">Diameter: {planets.result.properties.diameter} km</p>
                        <p className="card-text">Climate: {planets.result.properties.climate}</p>
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