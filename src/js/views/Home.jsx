import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetsCard.jsx";
import StarShipCard from "../component/StarShipCard.jsx";
import styles from "../component/Styles.module.css"

const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.characters < 1) {
			actions.getPeople()
		}
	}, [])
	useEffect(() => {
		if (store.planetsProperties < 1) {
			actions.getPlanets()
		}
	}, [])
	useEffect(() => {
		if (store.starShipsProperties < 1) {
			actions.getStarShips()
		}
	}, [])

	return (
		<div className={styles.backgroundImage}>
			<h1>Characters</h1>
			<div className={styles.cardsOverflow}>
				{
					store.characters.map((characters, index) => (
						<CharacterCard
							key={index}
							character={characters.result.properties}
						/>
					))
				}
			</div>
			<h1>Planets</h1>
			<div className={styles.cardsOverflow}>
				{
					store.planetsProperties.map((planets, index) => (
						<PlanetCard
							key={index}
							character={planets.result.properties}
						/>
					))
				}
			</div>
			<h1>StarShips</h1>
			<div className={styles.cardsOverflow}>
				{
					store.starShipsProperties.map((ships, index) => (
						<StarShipCard
							key={index}
							character={ships.result.properties}
						/>
					))
				}
			</div>
		</div>
	)
};

export default Home


// https://starwars-visualguide.com/assets/img/characters/1.jpg