import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div className='header'>

   
    <div className='companylogo'>
        <img src='img\cleartaxlogo.svg' alt='cleartax'></img>

    </div>
    <div className='header-content'>
        <li>Products</li>
        <li>Resources</li>
        <li>Company</li>
    </div>
    <div className='header-button'>
        <button className='button-content'>File now</button>
    </div>
    </div>
  )
}

export default Header;