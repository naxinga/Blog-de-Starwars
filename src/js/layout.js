import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Personajes } from "./views/personajes";
import { Planetas } from "./views/planetas";
import { Vehiculos } from "./views/vehiculos";
import { Cartas } from "./views/personales";
import { CartasP } from "./views/planetCard";
import { CartasV } from "./views/vCard";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/vehiculos">
							<Vehiculos />
						</Route>
						<Route exact path="/personales/:id">
							<Cartas />
						</Route>
						<Route exact path="/planetCard/:id">
							<CartasP />
						</Route>
						<Route exact path="/vCard/:id">
							<CartasV />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
