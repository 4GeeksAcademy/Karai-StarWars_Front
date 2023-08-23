import React, { useState, useEffect, useContext } from "react";
import { Context } from './store/appContext'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home.jsx"
import CreateAccount from "./component/CreateAccount.jsx";
import NotLoad from './component/NotLoad.jsx'
import Navbar from "./component/Navbar.jsx"
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { actions } = useContext(Context)

	const [isLoad, setIsLoad] = useState(false)

	// useEffect(() => {
	// 	actions.getPeople();
	// 	actions.getPlanets();
	// 	actions.getStarShips();
	// }, []);

	return (
		<div>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Routes>
							<Route path="/" element={<NotLoad />} />
							<Route path="/home" element={<Home />} />
							<Route path='/Createaccount' element={<CreateAccount />} />
							<Route path='/Login' element={<NotLoad />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					</ScrollToTop>
				</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
