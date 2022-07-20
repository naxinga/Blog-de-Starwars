import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "...src/styles/personales.css";

export const Cartas = () => {
    const { store, actions } = useContext(Context);
	const {id} = useParams();
	const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"

	useEffect(() => {
		actions.getCartas(id)
	},[]);

    return(
        <div className="container card">
			<div className="jumbotron text-light card2">
  				<h1 className="display-4">{store.cartas.name}</h1>
  				<p className="lead">Desde droides hechos de basura, hasta los héroes y villanos más emblemáticos de la saga del espacio, a continuación te enlistamos a los personajes de Star Wars.
				<br/>
				Crecimos con ellos, lloramos por sus muertes, nos reíamos de sus bromas, se convirtieron en memes, los idolatrábamos y a otros los despreciábamos. Hay un personaje de Star Wars para cada uno de nosotros y significan algo diferente para cada fanático.</p>
  				<hr className="my-4"/>
			</div>
        </div>
    )

}
