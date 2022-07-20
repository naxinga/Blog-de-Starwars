import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="jumbotron text-light">
  				<h1 className="display-4">Las naves de una galaxia muy lejana</h1>
  				<p className="lead">La historia de STAR WARS es una historia de héroes y villanos y cuenta con algunos de los vehículos y buques más emblemáticos jamás vistos. <br/>Te invitamos a embarcarte en un viaje por la galaxia para aprender y descubrir información sobre las naves que se hicieron famosas, desde pequeños cazas estelares hasta Destructores Estelares impresionantemente grandes.</p>
  				<hr className="my-4"/>
			</div>
			{
				store.naves.length >0 ? store.naves.map((nave) => {
					return(
						<div className="row" key={nave.uid}>
							<div className="col">
								<div className="card bg-dark text-white" >
									<div className="card-body">
										<h5 className="card-title">{nave.name} <Link  to={"/vCard/" + nave.uid}><button type="button" className="btn btn-danger float-end">Ir a la tarjeta de {nave.name}</button></Link></h5>
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