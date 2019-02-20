import React from 'react';
import PropTypes from 'prop-types';

const Favorites = ({favorites, deleteFavorite, showFavoriteWeather}) => {

  const FavoriteList = favorites.length ? (

    favorites.map(favorite => {
      return (        
          <div className="favorite" key={favorite.id}>
            <button className="favorites" onClick={() => {showFavoriteWeather(favorite.city)}}>{ favorite.city }</button>
            <button className="favoritesD" onClick={() => {deleteFavorite(favorite.id)}}>x</button>
          </div>
    )}
    )
    ) : (
        <p className="favoritesAlert">Hey, you have no favorites</p>
    )

  return (
    <div className="favorite-list">
      {FavoriteList} 
    </div>
  )
}

// FOR TESTING ---------------------------------------

Favorites.propTypes = {
  favorites: PropTypes.array,
};

Favorites.defaultProps = {
  favorites: [],
};
// ----------------------------------------------------

export default Favorites