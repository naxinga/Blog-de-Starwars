
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			cartas: [],
			planetas: [],
			cartasP: [],
			naves: [],
			cartasV: [],
			favoritos: [],

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
			
			addFavoritos: itemName => {
				const {favoritos} = getStore();
				if (!favoritos.find(i => i == itemName )){
					favoritos.push(itemName)
				}
				console.log(favoritos)
				setStore({favoritos})

			}, 

			deleteFavoritos: itemIndex => {
				const {favoritos} = getStore();
				const newFav = [...favoritos]
				newFav.splice(itemIndex,1)
				setStore({favoritos: newFav})
			},
			
			
		}
	};
};

export default getState;
