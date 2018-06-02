import React from 'react';

const Display = (props) => {
  return (
  <div id="apiDisplay">
  	<h1>New Display</h1>
    <p>{props.info.name}</p>
    <p>{props.info.weight}</p>
    {/* <img className="images" src={props.img}></img> */}
  </div>
  );   
};

export default Display;