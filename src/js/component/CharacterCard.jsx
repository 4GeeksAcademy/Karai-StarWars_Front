import React, { useState } from "react";
import LearnMore from "./LearnMore.jsx"
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"


const CharacterCard = ({ character }) => {

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
                            src={character.image_url}
                            className="card-img-top"
                            alt="..."
                        />
                        <h5 className="card-title" style={{ marginTop: "10px" }}>{character.name}</h5>
                        <p className="card-text">Gender: {character.gender}</p>
                        <p className="card-text">Height: {character.height}</p>
                        <div className={styles.cardBtn}>
                            <button onClick={() => actions.detailsToShow(character)} className={styles.learnMore}>Learn More</button>
                            <button onClick={() => actions.addFavoriteCharacter(character)} style={{ backgroundColor: "rgba(0, 0, 0, 0.327)" }} href="#"><i className="fa-regular fa-star" style={{ color: "#fae500" }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <LearnMore />
        </div>
    )
}

export default CharacterCard