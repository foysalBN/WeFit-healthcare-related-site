import './Footer.css'
import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='Footer'>
            <p>WeFit</p>
            <p>copyright © 2021 || All copyright reserved</p>
            <div className='secial-links'>
                <a href="http://facebook.com/annoms.rd" target="_blank" rel="noreferrer" > <BsFacebook /> </a>
                <a href="http://github.com/annomsDev" target="_blank" rel="noreferrer" > <BsGithub /></a>


            </div>
        </div>
    );
};

export default Footer;