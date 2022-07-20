import { Personajes } from "../views/personajes";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			cartas: [],
			planetas: [],
			cartasP: [],
			naves: [],
			cartasV: [],
			favoritos: ["luke","sky"],

		},
		actions: {
			
			getPersonajes: async() => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/people/', {
					  method: "GET", 
					})
				
					const data = await resp.json(); 
					setStore({ personajes : data.results})
					return null;

				  } catch(error) {
					  console.log(error);
				  }
			},
			getPlanetas: async() => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/planets', {
					  method: "GET", 
					})				
					  const data = await resp.json();
					  setStore({ planetas : data.results})
					return null;				
				  } catch(error) {
					  console.log(error);
				  }
			},
			getNaves: async() => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/starships', {
					  method: "GET", 
					})				
					  const data = await resp.json();
					  setStore({ naves : data.results})
					return null;				
				  } catch(error) {
					  console.log(error);
				  }
			},
			getCartas: async(id) => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/people/'+ id, {
					  method: "GET", 
					})				
					  const data = await resp.json();
					  setStore({ cartas : data.result.properties})
					return null;				
				  } catch(error) {
					  console.log(error);
				  }
			},
			getCartasP: async(id) => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/planets/'+ id, {
					  method: "GET", 
					})				
					  const data = await resp.json();
					  setStore({ cartasP : data.result.properties})
					return null;				
				  } catch(error) {
					  console.log(error);
				  }
			},
			addFavs: (add) =>{
				setStore([...favoritos,{favoritos : add.name}])
			},
			getCartasV: async(id) => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/starships/'+ id, {
					  method: "GET", 
					})				
					  const data = await resp.json();
					  setStore({ cartasV : data.result.properties})
					return null;				
				  } catch(error) {
					  console.log(error);
				  }
			},
			addFavs: (add) =>{
				setStore([...favoritos,{favoritos : add.name}])
			},

			delFavs: (del) =>{
				let a = [...favoritos]
        		a.splice(del,1);
        		setStore({favoritos: a});
			}
			
			
		}
	};
};

export default getState;
