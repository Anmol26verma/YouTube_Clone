// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';


import './Navbar.css';
import menu_icon from '../../assets/menu.png'; 
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notificatiion_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import { Link } from 'react-router-dom';


const Navbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div'> 
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => setSidebar ( prev  => prev === false ? true : false )} src={menu_icon} alt="MenuIcon" />
        <Link to='/'><img src={logo} alt="Logo" className='logo' /></Link>
      </div>

      <div className='nav-middle flex-div'>
        <div className='search-box flex-div' >
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="Search" />
        </div>
        
      </div>
      
      <div className='nav-right flex-div' >
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More" />
        <img src={notificatiion_icon} alt="notification" />
        <img src={profile_icon} className='user-icon' alt="Profile"  />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  setSidebar: PropTypes.func.isRequired,
};

export default Navbar ; 
