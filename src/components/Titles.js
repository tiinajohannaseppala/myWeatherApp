import React from 'react';
import logo from './umbrella-icon.png';

const Titles = () => (
	<div>
		<img className="logo" src={ logo } alt="umbrella-icon"/>
		<h1 className="title-container_title">MyWeatherApp</h1>
		<h3 className="title-container_subtitle"> Find out if you need umbrella or not!</h3>
	</div>
);

export default Titles;