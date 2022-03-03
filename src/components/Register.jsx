import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {auth} from "../firebase";

const Register = () => {


    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [loggedIn, setLoggedIn] = useState();


    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then((authUser)=> console.log(authUser))
            .catch((err) => alert(err))
    }



    return (
        <div className="w-[100vw] h-[100vh] flex justify-center">
            <div className="w-[50vw]">
                <form className="flex flex-col justify-center items-center mt-44 bg-[#f5f5f5] p-14 rounded-2xl shadow-lg">
                    <label className="text-2xl">Enter your email:</label>
                    <input type="email" ref={emailRef} className="border border-zinc-600 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <label className="mt-4 text-2xl">Enter your password:</label>
                    <input type="password" ref={passRef} className="border border-zinc-600 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-600 text-white rounded-md mt-8 hover:bg-zinc-500" onClick={register}>Register</button>
                    <label className="text-md mt-8">Already have an account?<Link to="/login"><span className="ml-2 text-sky-400">Login</span></Link></label>
                </form>
            </div>
        </div>
    );
};

export default Register;