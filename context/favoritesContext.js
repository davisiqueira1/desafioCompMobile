import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  // ajuda no autocompletion, podia ser vazio
  favorites: [],
  addFavorite: (profile) => {},
  removeFavorite: (profileID) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteProfiles, setFavoriteProfiles] = useState([]);

  const addFavorite = (profile) => {
    setFavoriteProfiles((currentProfiles) => [...currentProfiles, profile]);
  };

  const removeFavorite = (profileToRemove) => {
    setFavoriteProfiles((currentProfiles) =>
      currentProfiles.filter((profile) => profile.id !== profileToRemove.id)
    );
  };

  const value = {
    favorites: favoriteProfiles,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
