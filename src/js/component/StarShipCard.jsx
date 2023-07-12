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
                            onError={(e) => {
                                const uid = parseInt(starShip.result.uid, 10);
                                const fallbackUid = uid + 10;
                                e.target.src = `https://starwars-visualguide.com/assets/img/starships/${fallbackUid}.jpg`;
                                e.target.onerror = null;
                              }}
                        />
                        <h5 className="card-title" style={{marginTop: "10px", height: "40px"}}>{starShip.result.properties.name}</h5>
                        <p className="card-text" style={{ height: "35px"}}>Model: {starShip.result.properties.model}</p>
                        <p className="card-text">Crew: {starShip.result.properties.crew}</p>
                        <div className={styles.cardBtn}>
                            <button onClick={() => actions.detailsToShowShips(starShip)} className={styles.learnMore}>Learn More</button>
                            <button onClick={() => actions.addFavoriteShip(starShip)} style={{backgroundColor: "transparent"}} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
                <LearnMoreShips/>
        </div>
    )
}

export default PlanetsCard