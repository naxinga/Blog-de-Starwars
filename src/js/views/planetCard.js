import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/personales.css";

export const CartasP = () => {
    const { store, actions } = useContext(Context);
	const {id} = useParams();
	const urlImage = "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"

	useEffect(() => {
		actions.getCartasP(id)
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
						<h1>Nombre: {store.cartasP.name}   </h1>
						<p>Diametro: {store.cartasP.diameter} </p>
						<p>Gravedad: {store.cartasP.gravity} </p>
						<p>Clima: {store.cartasP.climate} </p>
						<p>Terreno: {store.cartasP.terrain} </p>
					</div>
				</div>	
			</div>	
		</div>

    )

}
