import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
    <header>
        <h1>Botanic Bazaar</h1>
        

    
        <ul className='vertical-nav'>
        <li><Link to="/header">Home</Link></li>
             <li><Link to="/about">About us</Link></li> 
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/plantList">PlantList</Link></li>     
        </ul>
        
      </header>
    </div>
    
  );
}

export default Header;
