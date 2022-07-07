import { Personajes } from "../views/personajes";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			cartas: [],
			planetas: [],
			naves: [],
			favoritos: ["luke","sky"],
			pid: "",
		},
		actions: {
			
			getPersonajes: async() => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/people/', {
					  method: "GET", // Si no se le especifica metodo es GET, aqui sobraría.
					})
				
					const data = await resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					setStore({ personajes : data.results})
					 data.results.map ( async(item) => {
						const resp = await fetch(item.url, {
							method: "GET",
						})
						const data = await resp.json();
						//setStore([{...cartas},{cartas : data.result.properties}])
						setStore({cartas : data.result.properties})
					  })
					  
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
					  setStore({ personales : data.result.properties})
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
