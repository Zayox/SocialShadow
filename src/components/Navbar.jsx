import React from 'react';
import Logo from '../img/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="h-16 w-[100%] flex justify-around ml-12">
            <div className="h-[100%] flex items-center">
                <img src={Logo} alt="logo" className="h-10"/>
            </div>
            <ul className="flex items-center h-[100%] text-xl">
                <Link to="/"><li className="hover:text-red-400">Home</li></Link>
                <Link to="/login"><li className="ml-4 hover:text-red-400">Login/Register</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;