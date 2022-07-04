import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark ">
			<div className="d-flex">
			<Link to="/">
				<a className="navbar-brand mb-0" id="logo" >
						<img src="https://i.pinimg.com/originals/66/61/1c/66611ce3c500946672757fd244cc6b41.gif"></img>
				</a>
			</Link>			
			<Link to="/demo">
				<button class="navbar"> Personajes</button>
			</Link>
		
			
			<Link to="/demo">
				<button class="navbar"> Planetas</button>
			</Link>
			
			
			<Link to="/demo">
				<button class="navbar"> Vehículos</button>
			</Link>	
			</div>		
		</nav>
	);
};
