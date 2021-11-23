import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMap) => {},
  removeFavorite: (mapId) => {},
  itemIsFavorite: (mapId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMap);
    });
  }

  function removeFavoriteHandler(mapId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(map => map.id !== mapid);
    });
  }

  function itemIsFavoriteHandler(mapId) {
    return userFavorites.some(map => map.id === mapId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
