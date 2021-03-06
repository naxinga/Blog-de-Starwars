import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/personales.css";

export const Cartas = () => {
    const { store, actions } = useContext(Context);
	const {id} = useParams();
	const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"

	useEffect(() => {
		actions.getCartas(id)
	},[]);

    return(
		<div className="container">
			<div class="row">
				<div class="col">
					<div className="cardPerso">
						<div className="card2Perso">
							<img src={urlImage} class="img-fluid rounded-start foto" alt="..."></img>			
						</div>
					</div>		
				</div>
				<div class="col">
					<div class="cardJumbo">
						<h1>Nombre: {store.cartas.name}   </h1>
						<p>Altura: {store.cartas.height} </p>
						<p>Color de Pelo: {store.cartas.hair_color} </p>
						<p>Género: {store.cartas.gender} </p>
						<p>Nacimiento: {store.cartas.birth_year} </p>
					</div>
				</div>	
			</div>	
		</div>

    )

}
