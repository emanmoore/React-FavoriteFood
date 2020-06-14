/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';

const img = "http://picsum.photos/200"


ReactDOM.render(
  <div>
    <h1 className="heading">My  food</h1>
    <img scr={img}/>
  </div>,
  
  document.getElementById("root")
);
