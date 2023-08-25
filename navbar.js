import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const navbar = () => {
  return (
    <div className='navbar1'>
      <div className='nav-links'><h3>TAMILNADU TOURISM</h3></div>
      <div>      
        <ul className='links'>
        <li>HOME</li>
        <li>PLACE TO VISIT</li>
        <li>BEST TIME TO VISIT</li>
        <li>PACKAGES</li>
        <li>DESTINATION</li>
        <li>FOOD</li>
        </ul>
     </div>
    </div>
      
  )
}

export default navbar
