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
				store.planetas.length >0 ? store.planetas.map((planets,i) => {
					return(
						<div className="row" key={planets.uid}>
							<div className="col">
								<div className="card bg-dark text-white" >
									<div className="card-body">
										<h5 className="card-title">{planets.name}</h5>
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