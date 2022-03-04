import React from 'react';
import Logo from '../img/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="h-20 w-[100%] flex justify-around lg:ml-8 ml-0">
            <div className="h-[100%] flex items-center">
                <Link to="/"><img src={Logo} alt="logo" className="h-14"/></Link>
            </div>
            <ul className="flex items-center h-[100%] text-xl">
                <Link to="/"><li className="hover:text-sky-400">Home</li></Link>
                <Link to="/login"><li className="ml-4 hover:text-sky-400">Login/Register</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;