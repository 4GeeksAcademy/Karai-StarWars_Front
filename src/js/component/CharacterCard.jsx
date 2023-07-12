import React, { useState } from "react";
import LearnMore from "./LearnMore.jsx"
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"


const CharacterCard = ({character}) => {

    const { store, actions } = useContext(Context)
    
    return (
        <div>
            <div>
                <div className={`card ${styles.cardsStyle}`}>
                    <div className="card-body">
                        <img
                            style={{
                                objectFit: "cover",
                                height: "240px",
                                objectPosition: "top",
                            }}
                            src={`https://starwars-visualguide.com/assets/img/characters/${character.result.uid}.jpg`}
                            className="card-img-top" 
                            alt="..."
                        />
                        <h5 className="card-title" style={{marginTop: "10px"}}>{character.result.properties.name}</h5>
                        <p className="card-text">Gender: {character.result.properties.gender}</p>
                        <p className="card-text">Height: {character.result.properties.height}</p>
                        <div className={styles.cardBtn}>
                            <button onClick={() => actions.detailsToShow(character)} className={styles.learnMore}>Learn More</button>
                            <button onClick={() => actions.addFavoriteCharacter(character)} style={{backgroundColor: "rgba(0, 0, 0, 0.327)"}} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
                <LearnMore/>
        </div>
    )
}

export default CharacterCard