import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const favs = () => {
        const { store, actions } = useContext(Context);

        const imprimir = store.favoritos.map((favs,indice) =>
        <div id={indice} key={indice} className="text-start linea">{favs} <button id="borrador" onClick={()=>borrar(indice)}> X </button></div>
        )
        console.log(favoritos)
        return (
            {imprimir}
    );

}