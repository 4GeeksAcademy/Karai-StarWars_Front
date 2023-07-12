const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      characters: [],
      planets: [],
      planetsProperties: [],
      starShips: [],
      starShipsProperties: [],
      favoriteCharacters: [],
      favoritePlanets: [],
      favoriteShips: [],
      currentDetailObject: {},
      currentDetailObjectPlanets: {},
      currentDetailObjectShips: {},
      isModalOpen: false,
      isModalOpenPlanets: false,
      isModalOpenShips: false
    },
    actions: {
      getPeople: async () => {
        try {
          const result = await fetch("https://www.swapi.tech/api/people")
          if (!result.ok) {
            throw new Error("Charging error")
          }
          const data = await result.json()
          console.log("Cargamos primer lista:", data)
          const store = getStore()
          setStore({ ...store, people: data.results });
          const { getLinksAndCharacters } = getActions()
          await getLinksAndCharacters()
        } catch (error) {
          console.log("Charging people error", error)
        }
      },

      getLinksAndCharacters: async () => {
        const store = getStore()
        const urlList = store.people.map(character => character.url)
        console.log(urlList)
        const { handlerGetCharactersProperties } = getActions()
        await handlerGetCharactersProperties(urlList)
      },

      handlerGetCharactersProperties: async (urlList) => {
        const { getCharactersProperties } = getActions()
        const pedidos = await urlList.map((url) => getCharactersProperties(url))
        await Promise.all(pedidos)
      },

      getCharactersProperties: async (url) => {
        try {
          const result = await fetch(url)
          if (!result.ok) {
            throw new Error("Charging error")
          }
          const data = await result.json()
          console.log(data)
          const store = getStore()
          setStore({ ...store, characters: [...store.characters, data] });
          console.log("Los archivos son", store.characters)
        } catch (error) {
          console.log("Charging characters error", error)
        }
      },

      getPlanets: async () => {
        try {
          const result = await fetch("https://www.swapi.tech/api/planets")
          if (!result.ok) {
            throw new Error("Charging error")
          }
          const data = await result.json()
          console.log("Cargamos primer lista:", data)
          const store = getStore()
          setStore({ ...store, planets: data.results });
          const { getLinksAndPlanets } = getActions()
          await getLinksAndPlanets()
        } catch (error) {
          console.log("Charging planets error", error)
        }
      },

      getLinksAndPlanets: async () => {
        const store = getStore()
        const urlList = store.planets.map(planet => planet.url)
        console.log(urlList)
        const { handlerGetPlanetsProperties } = getActions()
        await handlerGetPlanetsProperties(urlList)
      },

      handlerGetPlanetsProperties: async (urlList) => {
        const { getPlanetsProperties } = getActions()
        const pedidos = await urlList.map((url) => getPlanetsProperties(url))
        await Promise.all(pedidos)
      },

      getPlanetsProperties: async (url) => {
        try {
          const result = await fetch(url)
          if (!result.ok) {
            throw new Error("Charging error")
          }
          const data = await result.json()
          console.log(data)
          const store = getStore()
          setStore({ ...store, planetsProperties: [...store.planetsProperties, data] });
          console.log("Los archivos son", store.planets)
        } catch (error) {
          console.log("Charging planets error", error)
        }
      },

      getStarShips: async () => {
        try {
          const result = await fetch("https://www.swapi.tech/api/starships")
          if (!result.ok) {
            throw new Error("Charging error")
          }
          const data = await result.json()
          console.log("Cargamos primer lista:", data)
          const store = getStore()
          setStore({ ...store, starShips: data.results });
          const { getLinksAndStarShips } = getActions()
          await getLinksAndStarShips()
        } catch (error) {
          console.log("Charging starShips error", error)
        }
      },

      getLinksAndStarShips: async () => {
        const store = getStore()
        const urlList = store.starShips.map(character => character.url)
        console.log(urlList)
        const { handlerGetStarShipsProperties } = getActions()
        await handlerGetStarShipsProperties(urlList)
      },

      handlerGetStarShipsProperties: async (urlList) => {
        const { getStarShipsProperties } = getActions()
        const pedidos = await urlList.map((url) => getStarShipsProperties(url))
        await Promise.all(pedidos)
      },

      getStarShipsProperties: async (url) => {
        try {
          const result = await fetch(url)
          if (!result.ok) {
            throw new Error("Charging error")
          }
          const data = await result.json()
          console.log(data)
          const store = getStore()
          setStore({ ...store, starShipsProperties: [...store.starShipsProperties, data] });
          console.log("Los archivos son", store.starShipsProperties)
        } catch (error) {
          console.log("Charging starShipsProperties error", error)
        }
      },

      addFavoriteCharacter: async (character) => {
        const store = getStore()
        setStore({ ...store, favoriteCharacters: [...store.favoriteCharacters, character] });
      },
      addFavoritePlanet: async (character) => {
        const store = getStore()
        setStore({ ...store, favoritePlanets: [...store.favoritePlanets, character] });
      },
      addFavoriteShip: async (character) => {
        const store = getStore()
        setStore({ ...store, favoriteShips: [...store.favoriteShips, character] });
      },

      deleteFavoriteCharacter: async (uid) => {
        const store = getStore()
        const filteredList = store.favoriteCharacters.filter((element) => element.result.uid !== uid)
        setStore({ ...store, favoriteCharacters: filteredList })
      },
      deleteFavoritePlanet: async (uid) => {
        const store = getStore()
        const filteredList = store.favoritePlanets.filter((element) => element.result.uid !== uid)
        setStore({ ...store, favoritePlanets: filteredList })
      },
      deleteFavoriteShip: async (uid) => {
        const store = getStore()
        const filteredList = store.favoriteShips.filter((element) => element.result.uid !== uid)
        setStore({ ...store, favoriteShips: filteredList })
      },

      detailsToShow: async (element) => {
        console.log("entre a detail", element)
        const store = getStore()
        await setStore({ ...store, currentDetailObject: element })
        await setStore({ ...store, isModalOpen: true })
      },
      detailsToShowPlanets: async (element) => {
        console.log("entre a detail", element)
        const store = getStore()
        await setStore({ ...store, currentDetailObjectPlanets: element })
        await setStore({ ...store, isModalOpenPlanets: true })
      },
      detailsToShowShips: async (element) => {
        console.log("entre a detail", element)
        const store = getStore()
        await setStore({ ...store, currentDetailObjectShips: element })
        await setStore({ ...store, isModalOpenShips: true })
      },
      closeModal: () => {
        const store = getStore()
        setStore({ ...store, isModalOpen: false })
        setStore({ ...store, isModalOpenPlanets: false })
        setStore({ ...store, isModalOpenShips: false })
      }

    }
  };
};

export default getState;
