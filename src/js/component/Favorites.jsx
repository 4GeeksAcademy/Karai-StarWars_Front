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
                    store.favoriteCharacters.length > 0 ? (
                        store.favoriteCharacters.map((element, index) => (

                            <li key={index} className={styles.dropdownContent}>
                                <p className={styles.favoritos} onClick={() => actions.detailsToShow(element)}>{element.result?.properties?.name}</p>
                                <i
                                    onClick={() => actions.deleteFavoriteCharacter(element.result.uid)}
                                    className={`fa-solid fa-rectangle-xmark mt-1 ${styles.favoritesDeleteBtn}`}>
                                </i>
                            </li>
                        )
                        )
                    ) : (
                        <p style={{margin: '10px 10px 10px 10px'}}>No favorite characters yet</p>
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
                    store.favoritePlanets.length > 0 ? (
                        store.favoritePlanets.map((element, index) => (

                            <li key={index} className={styles.dropdownContent}>
                                <p className={styles.favoritos} onClick={() => actions.detailsToShowPlanets(element)}>{element.result?.properties?.name}</p>
                                <i
                                    onClick={() => actions.deleteFavoritePlanet(element.result.uid)}
                                    className={`fa-solid fa-rectangle-xmark mt-1 ${styles.favoritesDeleteBtn}`}>
                                </i>
                            </li>
                        )
                        )
                    ) : (
                        <p style={{margin: '10px 10px 10px 10px'}}>No favorite planets yet</p>
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
                    store.favoriteShips.length > 0 ? (
                        store.favoriteShips.map((element, index) => (

                            <li key={index} className={styles.dropdownContent}>

                                <p className={styles.favoritos} onClick={() => actions.detailsToShowShips(element)}>{element.result?.properties?.name}</p>
                                <i
                                    onClick={() => actions.deleteFavoriteShip(element.result.uid)}
                                    className={`fa-solid fa-rectangle-xmark mt-1 ${styles.favoritesDeleteBtn}`}>
                                </i>
                            </li>
                        )
                        )
                    ) : (
                        <p style={{margin: '10px 10px 10px 10px'}}>No favorite starships yet</p>
                    )
                }

            </div>
        </div>
    )
}

export default Favorites