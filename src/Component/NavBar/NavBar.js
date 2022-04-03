import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-tabs'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/cart'><i className="bi bi-cart-check-fill cart-icons"></i></CustomLink>
            <CustomLink to='/about'>About us</CustomLink>
            <CustomLink to='/contact'>Contact us</CustomLink>
        </div>
    );
};
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}


export default NavBar;