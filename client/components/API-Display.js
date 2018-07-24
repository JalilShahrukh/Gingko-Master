import React from 'react';

const API = (props) => {
    console.log('what is props :' , props.info);
  return (
  <div className="apiDiv">
  	<h1>Weather</h1>
    <p>Sunrise is: {props.info.results.sunrise}</p>
    <p>Sunset is: {props.info.results.sunset}</p>
    <p>{props.info.weight}</p> 
  </div>
  );   
};

export default API;