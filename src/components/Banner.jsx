import React from 'react';
import Mockup from "../img/Mockup.png";
import "../App.css";
import "../tailwind.config";

const Banner = () => {
    return (
        <div className="ml-[5vw] flex">
            <div className="mt-40">
                <h1 className="font-bold text-6xl bg-sky-400 w-[26rem] lg:w-[41rem] p-2 lg:text-8xl text-white">SocialShadow,</h1>
                <h1 className="font-bold text-6xl mt-4 lg:text-8xl">Une plateforme sûre</h1>
                <h1 className="font-bold text-6xl mt-4 lg:text-8xl">Pour un monde obscur</h1>
            </div>
            <img src={Mockup} className="mt-36 h-[40rem] ml-[10rem] animate-[bounce_3s_ease-in-out_infinite]" alt="Iphone Mockup"/>
        </div>
    );
};

export default Banner;