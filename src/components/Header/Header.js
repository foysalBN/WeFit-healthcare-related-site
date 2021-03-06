import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Header">
            <div className="container-fluid">
                <span className='logo'>
                    <Link className="navbar-brand" to='/'> We<span>Fit</span></Link>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/gallary'>Exercise Gallary</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about-us'>About Us</NavLink>
                        </li>
                        {
                            !user.uid ?
                                <>
                                    < li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to='/signin'><span className='wf-btn-secondary'>Sign In</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to='/signup'><span className='wf-btn-primary'>Sign Up</span></NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <button className='wf-btn-secondary' onClick={() => logOut()}>Log Out</button>
                                    <li className='nav-item text-light d-flex align-items-center ms-2'>
                                        {user.displayName || user.email}
                                    </li>
                                </>

                        }

                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Header;