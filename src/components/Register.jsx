import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div>
            <form className="flex flex-col justify-center items-center mt-72">
                <label className="text-2xl">Enter your email:</label>
                <input type="email" className="border border-zinc-600 rounded-md mt-8"/>
                <label className="mt-4 text-2xl">Enter your password:</label>
                <input type="password" className="border border-zinc-600 rounded-md mt-8"/>
                <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-600 text-white rounded-md mt-8 hover:bg-zinc-500">Register</button>
                <label className="text-md mt-8">Already have an account?<Link to="/login"><span className="ml-2 text-sky-400">Login</span></Link></label>
            </form>
        </div>
    );
};

export default Register;