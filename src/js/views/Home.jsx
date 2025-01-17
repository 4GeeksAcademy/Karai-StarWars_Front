import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetsCard.jsx";
import StarShipCard from "../component/StarShipCard.jsx";
import styles from "../component/Styles.module.css"
import PlanetsLetter from "../../img/planets.png"
import CharactersLetter from "../../img/characters.png"
import StarshipLetter from "../../img/starship.png"
import NavBar from "../component/Navbar.jsx";
import Fondo from "../../img/fondoHome.png";

import LearnMore from "../component/LearnMore.jsx";

const Home = () => {

	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	const [isLoad, setIsLoad] = useState(false)

	window.onload = function () {
		const body = document.body;
		const fullPageWidth = body.scrollWidth;
		const fullPageHeight = body.scrollHeight;

		console.log("Ancho completo de la página:", fullPageWidth);
		console.log("Alto completo de la página:", fullPageHeight);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			actions.getCharacters()
            actions.getPlanets()
            actions.getStarShips()
            actions.getFavorites()
		} else {
			navigate('/');
		}
	}, [])



	return (
		<div style={{
			backgroundImage: `url(${Fondo})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
		}}>
			<NavBar />
			<div>
				<div className={styles.titles}>
					<img
						src={CharactersLetter}
						alt=""
						style={{ width: "250px" }}
					/>
				</div>
				<div className={styles.cardsOverflow}>
					{ store.characters.length > 0 &&
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
				{ store.planets.length > 0 &&
					store.planets.map((planets, index) => (
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
				{store.starships.length > 0 &&
					store.starships.map((ships, index) => (
						<StarShipCard
							key={index}
							starship={ships}
						/>
					))
				}
			</div>
		</div>
		// 		)}
		// 	</div>
	)
};

export default Home