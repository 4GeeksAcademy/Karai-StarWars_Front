import React, { useState, useEffect, useContext } from "react";
import { Context } from './store/appContext'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home.jsx"
import Navbar from "./component/Navbar.jsx"
import NotLoad from "./component/NotLoad.jsx"
import injectContext from "./store/appContext";
import Fondo from "../img/fondo.png"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { actions } = useContext(Context)

	const [isLoad, setIsLoad] = useState(false)

	useEffect(() => {
		const delay = 5000;
		const timer = setTimeout(() => {

			actions.getPeople();
			actions.getPlanets();
			actions.getStarShips();


			setIsLoad(true);
		}, delay);

		return () => {
			clearTimeout(timer); // Limpia el temporizador para evitar que se ejecute después del desmontaje del componente
		};
	}, []);

	return (
		<div>
			{!isLoad ? (
				<div>
					<NotLoad />
				</div>
			) : (

				<div style={{
					backgroundImage: `url(${Fondo})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				}}>
					<BrowserRouter basename={basename}>
						<ScrollToTop>
							<Navbar />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="*" element={<h1>Not found!</h1>} />
							</Routes>
						</ScrollToTop>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
};

export default injectContext(Layout);
