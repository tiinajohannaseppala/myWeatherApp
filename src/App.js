import React, { Component } from 'react';
import Favorites from './components/Favorites';
import AddFavorite from './components/AddFavorite';
import Weather from "./components/Weather";
import Titles from "./components/Titles";
import Form from "./components/Form";

const api_key = "41b043b6602308228f9b5f0fe834842f";

class App extends Component {
  state = {
    weather: {
      temperature: "",
      icon: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      error: ""
    },
    favorites: [
      {id: 1, city: 'Helsinki'},
      {id: 2, city: 'Kemi'},
      {id: 3, city: 'Kolari'}
    ]
  }

  // ADD NEW FAVORITE
  // validation is still missing
  addFavorite = (favorite) => {
    
    favorite.id = this.state.favorites.length+1; 
    //console.log(favorite, favorite.id);
    let favorites = [...this.state.favorites, favorite];
    this.setState({
      favorites: favorites
    });
  }

  // DELETE FAVORITE
  deleteFavorite = (id) => {
    // console.log(id);
    let favorites = this.state.favorites.filter(favorite => {
      return favorite.id !== id
    });
    this.setState({
      favorites: favorites
    });
  }

  // SHOWS YOURS FAVORITES (GETS WEATHER FROM OPENWEATHERMAP AND SHOWS IT)
  // could be combined with getWeather
  showFavoriteWeather = async (city) => {
    // error handling is still missing
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    const response = await api_call.json();
    console.log(city, response);
    this.setState({
      weather: {
        temperature: response.main.temp,
        icon: response.weather[0].icon,
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        error: ""
        }
      })
    }
  
  // GET WEATHER FROM OPENWEATHERMAP AND SHOW IT
  getWeather = async (e) => {
    e.preventDefault();   
    const city = e.target.elements.city.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    const response = await api_call.json();

    //if input is entered
    if (city){
      //if no response
      if (response.cod === '404'){
        this.setState({
          weather: {
            temperature: "",
            icon: "",
            city: "",
            country: "",
            description: "",
            error: "Sorry, at the moment this app finds only cities of planet earth."
          }
        })
      }
      
      else {
      this.setState({
        weather: {
          temperature: response.main.temp,
          icon: response.weather[0].icon,
          city: response.name,
          country: response.sys.country,
          description: response.weather[0].description,
          error: ""
        }
      })
      }
    }
    // if no input
    else {
      this.setState({
        weather: {
          temperature: "",
          icon: "",
          city: "",
          country: "",
          description: "",
          error: "Hmmp, maybe try with a city this time..."
        }
      })
    }
  }
  
  render() {
    return (
      <div>
        <div className="background">
              <div className="container">

                      <div className="col">
                          <Titles/>
                      </div>

                      <div className="col">
                          <Form getWeather={this.getWeather} />
                          <Weather
                            icon={this.state.weather.icon}
                            temperature={this.state.weather.temperature}
                            city={this.state.weather.city}
                            country={this.state.weather.country}
                            description={this.state.weather.description}
                            error={this.state.weather.error}
                            addFavorite={this.addFavorite}
                          />
                      </div>

                      <div className="col">
                          <h2 className="title-container_title">MyFavorites</h2>
                          <Favorites favorites={this.state.favorites} deleteFavorite={this.deleteFavorite} showFavoriteWeather={this.showFavoriteWeather}/>
                          <AddFavorite addFavorite={this.addFavorite} />     
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}

export default App;