import React from 'react';
import Mockup from "../img/Mockup.png";
import "../App.css";
import "../tailwind.config";

const Banner = () => {
    return (
        <div className="ml-[5vw] flex lg:flex-row md:flex-row flex-col">
            <div className="mt-40">
                <h1 className="font-bold sm:text-6xl md:text-6xl text-5xl bg-sky-400 sm:w-[26rem] md:w-[26rem] w-[21rem] lg:w-[41rem] p-2 lg:text-8xl text-white">SocialShadow,</h1>
                <h1 className="font-bold sm:text-6xl md:text-6xl text-3xl mt-4 lg:text-8xl">Une plateforme sûre</h1>
                <h1 className="font-bold sm:text-6xl md:text-6xl text-3xl mt-4 lg:text-8xl">Pour un monde obscur</h1>
            </div>
            <img src={Mockup} className="mt-36 lg:h-[40rem] md:h-[40rem] sm:h-1/5 h-1/5 lg:ml-[10rem] md:ml-[10rem] animate-[bounce_3s_ease-in-out_infinite]" alt="Iphone Mockup"/>
        </div>
    );
};

export default Banner;