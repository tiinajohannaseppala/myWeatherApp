import React from 'react';
//import AddFavorite from './AddFavorite';

const Weather = (props) => (
        <div className="weather_info">
        {   props.icon && <img src ={ `http://openweathermap.org/img/w/${ props.icon }.png` } alt="weather_icon" className="weather_icon" />}
        {   props.city && props.country && <p className="weather_key"><span className="weather_value"> { props.city }, { props.country }</span></p> }
        {   props.temperature && <p className="weather_key"> Temperature: <span className="weather_value"> { props.temperature }&#176;</span></p> }
        {   props.description && <p className="weather_key"> Conditions: <span className="weather_value"> { props.description } </span></p> }
        {   props.error && <h3 className="weather_error">{ props.error }</h3>  }
        {/*   NOT WORKING YEAT / Add or delete favorites when the current weather is shown  */}
        {/*   props.city && <button onClick={props.addFavorite( props.city )}>Add to Favorite </button> */}
        {/*   props.city && <button onClick={props.deleteFavorite( props.city )}>Delete from Favorites </button> */}
	</div>
);

export default Weather;