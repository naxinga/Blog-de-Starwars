import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/personales.css";

export const CartasV = () => {
    const { store, actions } = useContext(Context);
	const {id} = useParams();
	const urlImage = "https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg"

	useEffect(() => {
		actions.getCartasV(id)
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
						<h1>Modelo: {store.cartasV.model}   </h1>
						<p>Clase: {store.cartasV.starship_class} </p>
						<p>Pasajeros: {store.cartasV.passengers} </p>
						<p>Tripulación: {store.cartasV.crew} </p>
						<p>Precio: {store.cartasV.cost_in_credits} </p>
					</div>
				</div>	
			</div>	
		</div>

    )

}
