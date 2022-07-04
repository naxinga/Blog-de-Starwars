const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [
				{
					
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async() => {
				try{
					const resp = await fetch('https://www.swapi.tech/api/people', {
					  method: "GET", // Si no se le especifica metodo es GET, aqui sobraría.
					})
				
					  const data = await resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					  setStore({ personajes : data.results})

					return null;					  
				
				  } catch(error) {
					  console.log(error);
				  }
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changePersonaje: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const PJ = store.personajes.map(() => {
					
					return ;
				});

				//reset the global store
				setStore({ personajes : data.results });
			}
		}
	};
};

export default getState;
