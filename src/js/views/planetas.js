import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
            <div className="jumbotron text-light">
  				<h1 className="display-4">Los planetas de una galaxia muy lejana</h1>
  				<p className="lead">La galaxia ficticia en la que tienen lugar los acontecimientos de Star Wars está formada por varias regiones, que a su vez se subdividen en sectores y sistemas, con numerosos planetas y satélites como Bespin, Dagobah, Utapau o Yavin.</p>
                <hr className="my-4"/>
			</div>
			{
				store.planetas.length >0 ? store.planetas.map((planets) => {
					return(
						<div className="row" key={planets.uid}>
							<div className="col">
								<div className="card bg-dark text-white" >
									<div className="card-body">
										<h5 className="card-title">{planets.name}
										<button key={planets.uid} type="button" onClick={() => actions.addFavoritos(planets.name)}>
											<span className="button-content">
												<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="currentColor"></path></svg> 
											</span>
											</button> 
										<Link  to={"/planetCard/" + planets.uid}><button type="button" className="btn btn-danger float-end">Ir a la tarjeta de {planets.name}</button></Link></h5>
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