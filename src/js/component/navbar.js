import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
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

			<div className="btn-group">
  			<button type="button" className="btn btn-dark dropdown-toggle me-5" data-bs-toggle="dropdown" aria-expanded="false">
			Favoritos <span className="badge bg-secondary">{store.favoritos.length}</span>
			</button>
  			<ul className="dropdown-menu dropdown-menu-end">
				{store.favoritos.map((item,i) => {
				return (
					<li key={i}><a className="dropdown-item d-flex justify-content-between">
						{item} <button className="btn btn-outline-secondary border-0 btn-sm" > <i className="fa-solid fa fa-trash" onClick={()=> actions.deleteFavoritos(i)}></i></ button>
						</a>
					</li>
					)
				})
				}
  			</ul>
  		</div>		
		</nav>
	);
};
