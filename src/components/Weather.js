import React from 'react';
//import AddFavorite from './AddFavorite';

const Weather = (props) => (
        <div className="weather">

        {   
            props.icon && 
            <img src ={ `http://openweathermap.org/img/w/${ props.icon }.png` } alt="weather-icon" className="weather-icon" />
        }
        {   
            props.city && props.country && 
            <p className="weather-info">
            <span className="weather-value"> { props.city }, { props.country }</span>
            </p> 
        }
        {   
            props.temperature && 
            <p className="weather-info"> Temperature: 
            <span className="weather-value"> { props.temperature }&#176;</span></p> 
        }
        {   
            props.description && <p className="weather-info"> Conditions: 
            <span className="weather-value"> { props.description } </span></p> 
        }
        {   
            props.error && 
            <h3 className="weather-error">{ props.error }</h3>  
        }

        {/*   NOT WORKING YEAT / Add or delete favorites when the current weather is shown  */}
        {/*   props.city && <button onClick={props.addFavorite( props.city )}>Add to Favorite </button> */}
        {/*   props.city && <button onClick={props.deleteFavorite( props.city )}>Delete from Favorites </button> */}
	</div>
);

export default Weather;