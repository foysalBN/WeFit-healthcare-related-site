import './Header.css';
import logo from '../../img/log.svg';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Header">
            <div className="container-fluid">
                <span className='logo'>
                    <Link className="navbar-brand" to='/'><img height='50px' src={logo} alt="" /> </Link>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/rd'>Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/signin'><span className='wf-btn-secondary'>Sign In</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/signup'><span className='wf-btn-primary'>Sign Up</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;