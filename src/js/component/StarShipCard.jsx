import React, { useState } from "react";
import LearnMoreShips from "./LearnMoreShips.jsx"
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"


const PlanetsCard = ({starship}) => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <div>
                <div className={`card ${styles.cardsStyleShips}`}>
                    <div className="card-body" style={{height: "auto"}}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`}
                            className="card-img-top" 
                            alt="..."
                            onError={(e) => {
                                e.target.src = `https://starwars-visualguide.com/assets/img/starships/40.jpg`;
                              }}
                        />
                        <h5 className="card-title" style={{marginTop: "10px", height: "40px"}}>{starship.name}</h5>
                        <p className="card-text" style={{ height: "35px"}}>Model: {starship.model}</p>
                        <p className="card-text">Crew: {starship.crew}</p>
                        <div className={styles.cardBtn}>
                            <button onClick={() => actions.detailsToShowShips(starship)} className={styles.learnMore}>Learn More</button>
                            <button onClick={() => actions.addFavoriteShip(starship)} style={{backgroundColor: "transparent"}} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
                <LearnMoreShips/>
        </div>
    )
}

export default PlanetsCard