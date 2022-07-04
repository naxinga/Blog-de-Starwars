import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
            <div class="jumbotron text-light">
  				<h1 class="display-4">Los planetas de una galaxia muy lejana</h1>
  				<p class="lead">La galaxia ficticia en la que tienen lugar los acontecimientos de Star Wars está formada por varias regiones, que a su vez se subdividen en sectores y sistemas, con numerosos planetas y satélites como Bespin, Dagobah, Utapau o Yavin.</p>
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