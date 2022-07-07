import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import favs from "./favoritos.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark ">
			<div className="d-flex">
			<Link to="/">
				<img src="https://i.pinimg.com/originals/66/61/1c/66611ce3c500946672757fd244cc6b41.gif"></img>
			</Link>			
			<Link  to="/personajes">
			<button className="navbar-item">Personajes</button>
			</Link>
		
			
			<Link to="/planetas">
				<button className="navbar-item"> Planetas</button>
			</Link>
			
			
			<Link to="/vehiculos">
				<button className="navbar-item"> Vehículos</button>
			</Link>
			<favs/>
			</div>		
		</nav>
	);
};
