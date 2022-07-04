import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div class="jumbotron text-light">
  				<h1 class="display-4">Las naves de una galaxia muy lejana</h1>
  				<p class="lead">La historia de STAR WARS es una historia de héroes y villanos y cuenta con algunos de los vehículos y buques más emblemáticos jamás vistos. <br/>Te invitamos a embarcarte en un viaje por la galaxia para aprender y descubrir información sobre las naves que se hicieron famosas, desde pequeños cazas estelares hasta Destructores Estelares impresionantemente grandes.</p>
  				<hr class="my-4"/>
			</div>
			<div class="row">
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div class="row">
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div class="row">
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card bg-dark text-white">
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};