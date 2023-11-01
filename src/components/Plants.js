// Plant.js
import React from 'react';

const Plant = ({ name, price, description,imageUrl}) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Price:{price}</p>
      <p>Description:{description}</p>
      <p>Image:{imageUrl}</p>

    </div>
  );
};

export default Plant;