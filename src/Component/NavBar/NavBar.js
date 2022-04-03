import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-tabs'>
            <Link to='/home'>Home</Link>
            <Link to='/cart'><i className="bi bi-cart-check-fill cart-icons"></i></Link>
            <Link to='/about'>About us</Link>
            <Link to='/contact'>Contact us</Link>
        </div>
    );
};

export default NavBar;