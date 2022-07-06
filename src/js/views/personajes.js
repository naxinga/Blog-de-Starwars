import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
		
	return (
		<div className="container">
			<div className="jumbotron text-light">
  				<h1 className="display-4">Los personajes de una galaxia muy lejana</h1>
  				<p className="lead">Desde droides hechos de basura, hasta los héroes y villanos más emblemáticos de la saga del espacio, a continuación te enlistamos a los personajes de Star Wars.
				<br/>
				Crecimos con ellos, lloramos por sus muertes, nos reíamos de sus bromas, se convirtieron en memes, los idolatrábamos y a otros los despreciábamos. Hay un personaje de Star Wars para cada uno de nosotros y significan algo diferente para cada fanático.</p>
  				<hr className="my-4"/>
			</div>
			{
				store.personajes.length >0 ? store.personajes.map((pj) => {
					return(
						<div className="row" key={pj.uid}>
							<div className="col">
								<div className="card bg-dark text-white" >
									<div className="card-body">
										<h5 className="card-title">{pj.name} <Link  to={"/personales/" + pj.uid}><button type="button" className="btn btn-danger float-end">Ir a la tarjeta de {pj.name}</button></Link></h5>
									</div>
								</div>
							</div>							
						</div>
					)
				}):
				<div className="card-body">
					<h5 className="card-title text-light">Loading...</h5>
				</div>
			}
		</div>
	);
};
