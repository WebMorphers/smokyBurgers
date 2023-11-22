import React from 'react';
import './frita.css';  
import img from '../assets/frita.png';

const Frita = () => {
  return (
    <div className="frita-container">
      <img src={img} alt="Frita" className="frita-img" />
    </div>
  );
}

export default Frita;
