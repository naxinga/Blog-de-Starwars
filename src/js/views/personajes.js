import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Personajes = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div class="jumbotron text-light">
  				<h1 class="display-4">Los personajes de una galaxia muy lejana</h1>
  				<p class="lead">Desde droides hechos de basura, hasta los héroes y villanos más emblemáticos de la saga del espacio, a continuación te enlistamos a los personajes de Star Wars.
				<br/>
				Crecimos con ellos, lloramos por sus muertes, nos reíamos de sus bromas, se convirtieron en memes, los idolatrábamos y a otros los despreciábamos. Hay un personaje de Star Wars para cada uno de nosotros y significan algo diferente para cada fanático.</p>
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
