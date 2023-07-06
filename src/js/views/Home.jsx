import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetsCard.jsx";
import StarShipCard from "../component/StarShipCard.jsx";
import styles from "../component/Styles.module.css"
import PlanetsLetter from "../../img/planets.png"
import CharactersLetter from "../../img/characters.png"
import StarshipLetter from "../../img/starship.png"
import LearnMore from "../component/LearnMore.jsx";

const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		// if (store.characters < 1) {
		// 	actions.getPeople()
		// }
		// if (store.planetsProperties < 1) {
		// 	actions.getPlanets()
		// }
		// if (store.starShipsProperties < 1) {
		// 	actions.getStarShips()
		// }
	}, [])

	return (
		<div>
			<div className={styles.titles}>
				<img
					src={CharactersLetter}
					alt=""
					style={{ width: "250px" }}
				/>
			</div>
			<div>
				<div className={styles.cardsOverflow}>
					{
						store.characters.map((characters, index) => (
							<CharacterCard
								key={index}
								character={characters}
							/>
						))
					}
				</div>
			</div>
			<div className={styles.titles}>
				<img
					src={PlanetsLetter}
					alt=""
					style={{ width: "200px" }}
				/>
			</div>
			<div className={styles.cardsOverflow}>
				{
					store.planetsProperties.map((planets, index) => (
						<PlanetCard
							key={index}
							planets={planets}
						/>
					))
				}
			</div>
			<div className={styles.titles}>
				<img
					src={StarshipLetter}
					alt=""
					style={{ width: "250px" }}
				/>
			</div>
			<div className={styles.cardsOverflow}>
				{
					store.starShipsProperties.map((ships, index) => (
						<StarShipCard
							key={index}
							starShip={ships}
						/>
					))
				}
			</div>
		</div>
	)
};

export default Home


// https://starwars-visualguide.com/assets/img/characters/1.jpg