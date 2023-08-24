import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import LearnMore from "./LearnMore.jsx"
import styles from "../component/Styles.module.css";
import PlanetsLetter from "../../img/planets.png"
import CharactersLetter from "../../img/characters.png"
import StarshipLetter from "../../img/starship.png"


const Favorites = () => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <div>
                <div>
                    <img
                        src={CharactersLetter}
                        alt=""
                        style={{ width: "100px" }}
                    />
                </div>
                {
                    store.favoriteCharactersIds.length & store.characters.length > 0 ? (
                        store.favoriteCharactersIds.map((element, index) => {
                            const character = store.characters.find((character) => character.id === element);
                            return (
                                <li key={index} className={styles.dropdownContent}>
                                    <p className={styles.favoritos} onClick={() => actions.detailsToShow(character)}>{character.name}</p>
                                    <i
                                        onClick={() => actions.deleteFavoriteCharacter(character)}
                                        className={`fa-solid fa-rectangle-xmark mt-1 ${styles.favoritesDeleteBtn}`}>
                                    </i>
                                </li>
                            )
                        })
                    ) : (
                        <p style={{ margin: '10px 10px 10px 10px' }}>No favorite characters yet</p>
                    )
                }
                <div>
                    <img
                        src={PlanetsLetter}
                        alt=""
                        style={{ width: "75px" }}
                    />
                </div>
                {
                    store.favoritePlanetsIds.length & store.planets.length > 0 ? (
                        store.favoritePlanetsIds.map((element, index) => {

                            const planet = store.planets.find((planet) => planet.id === element);

                            return (
                                <li key={index} className={styles.dropdownContent}>
                                    <p className={styles.favoritos} onClick={() => actions.detailsToShowPlanets(planet)}>{planet.name}</p>
                                    <i
                                        onClick={() => actions.deleteFavoritePlanet(planet)}
                                        className={`fa-solid fa-rectangle-xmark mt-1 ${styles.favoritesDeleteBtn}`}>
                                    </i>
                                </li>
                            )
                        })
                    ) : (
                        <p style={{ margin: '10px 10px 10px 10px' }}>No favorite planets yet</p>
                    )
                }
                <div>
                    <img
                        src={StarshipLetter}
                        alt=""
                        style={{ width: "100px" }}
                    />
                </div>
                {
                    store.favoriteShipsIds.length & store.starships.length > 0 ? (
                        store.favoriteShipsIds.map((element, index) => {

                            const starship = store.starships.find((starship) => starship.id === element);
                            return (
                                <li key={index} className={styles.dropdownContent}>
                                    <p className={styles.favoritos} onClick={() => actions.detailsToShowShips(starship)}>{starship.name}</p>
                                    <i
                                        onClick={() => actions.deleteFavoriteShip(starship)}
                                        className={`fa-solid fa-rectangle-xmark mt-1 ${styles.favoritesDeleteBtn}`}>
                                    </i>
                                </li>
                            )
                        })
                    ) : (
                        <p style={{ margin: '10px 10px 10px 10px' }}>No favorite StarShips yet</p>
                    )
                }

            </div>
        </div>
    )
}

export default Favorites