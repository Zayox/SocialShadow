import React from 'react';
import Mockup from "../img/Mockup.png";
import "../App.css";
import "../tailwind.config";
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';
import Image1 from '../img/image-1.jpg'
import Image2 from '../img/image-2.jpg'
import Image3 from '../img/image-3.jpg'

const About = () => {
    return (
<section class="pt-20 lg:pt-[120px] overflow-hidden flex justify-center">
   <div class="container">
      <div class="flex flex-wrap justify-between items-center -mx-4">
         <div class="w-full lg:w-6/12 px-4">
            <div class="flex items-center -mx-3 sm:-mx-4">
               <div class="w-full xl:w-1/2 px-3 sm:px-4">
                  <div class="py-3 sm:py-4">
                     <img
                        src={Image1}
                        alt=""
                        class="rounded-2xl w-full"
                        />
                  </div>
                  <div class="py-3 sm:py-4">
                     <img
                        src={Image2}
                        alt=""
                        class="rounded-2xl w-full"
                        />
                  </div>
               </div>
               <div class="w-full xl:w-1/2 px-3 sm:px-4">
                  <div class="my-4 relative z-10">
                     <img
                        src={Image3}
                        alt=""
                        class="rounded-2xl w-full"
                        />
                     <span class="absolute -right-7 -bottom-7 z-[-1]">
                        <svg
                           width="134"
                           height="106"
                           viewBox="0 0 134 106"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           >
                           <circle
                              cx="1.66667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 1.66667 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 16.3333 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 31 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 45.6667 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3334"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 60.3334 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 88.6667 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 117.667 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 74.6667 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 103 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="104"
                              r="1.66667"
                              transform="rotate(-90 132 104)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="1.66667"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 1.66667 89.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 16.3333 89.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 31 89.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="89.3333"
                              r="1.66667"
                              transform="rotate(-90 45.6667 89.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3333"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 60.3333 89.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 88.6667 89.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 117.667 89.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 74.6667 89.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 103 89.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="89.3338"
                              r="1.66667"
                              transform="rotate(-90 132 89.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="1.66667"
                              cy="74.6673"
                              r="1.66667"
                              transform="rotate(-90 1.66667 74.6673)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="1.66667"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 1.66667 31.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 16.3333 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 16.3333 31.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 31 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 31 31.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 45.6667 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="31.0003"
                              r="1.66667"
                              transform="rotate(-90 45.6667 31.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3333"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 60.3333 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3333"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 60.3333 30.9998)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 88.6667 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 88.6667 30.9998)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 117.667 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 117.667 30.9998)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 74.6667 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 74.6667 30.9998)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 103 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 103 30.9998)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="74.6668"
                              r="1.66667"
                              transform="rotate(-90 132 74.6668)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="30.9998"
                              r="1.66667"
                              transform="rotate(-90 132 30.9998)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="1.66667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 1.66667 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="1.66667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 1.66667 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 16.3333 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 16.3333 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 31 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 31 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 45.6667 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 45.6667 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3333"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 60.3333 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3333"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 60.3333 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 88.6667 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 88.6667 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 117.667 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 117.667 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 74.6667 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 74.6667 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 103 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 103 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="60.0003"
                              r="1.66667"
                              transform="rotate(-90 132 60.0003)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="16.3333"
                              r="1.66667"
                              transform="rotate(-90 132 16.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="1.66667"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 1.66667 45.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="1.66667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 1.66667 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 16.3333 45.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="16.3333"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 16.3333 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 31 45.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="31"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 31 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="45.3333"
                              r="1.66667"
                              transform="rotate(-90 45.6667 45.3333)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="45.6667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 45.6667 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3333"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 60.3333 45.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="60.3333"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 60.3333 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 88.6667 45.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="88.6667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 88.6667 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 117.667 45.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="117.667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 117.667 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 74.6667 45.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="74.6667"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 74.6667 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 103 45.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="103"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 103 1.66683)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="45.3338"
                              r="1.66667"
                              transform="rotate(-90 132 45.3338)"
                              fill="#3056D3"
                              />
                           <circle
                              cx="132"
                              cy="1.66683"
                              r="1.66667"
                              transform="rotate(-90 132 1.66683)"
                              fill="#3056D3"
                              />
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div class="mt-10 lg:mt-0">
               <span class="font-semibold text-lg text-primary mb-2 block">
               Le principe de SocialShadow
               </span>
               <h2 class="font-bold text-3xl sm:text-4xl text-dark mb-8">
                  Que faisons-nous ?
               </h2>
               <p class="text-base text-body-color mb-8">
               L’objectif de SocialShadow est de supprimer les données des utilisateurs présents sur internet afin de protéger leur vie privée.
               </p>
               <p class="text-base text-body-color mb-12">
               Nous mettons en avant la sécurité de chaque utilisateur qui va sur internet et essayons de leur offrir la meilleure expérience sans avoir les désavantages.

               </p>
               <a
                  href="javascript:void(0)"
                  class="
                  py-4
                  px-10
                  lg:px-8
                  xl:px-10
                  inline-flex
                  items-center
                  justify-center
                  text-center text-white text-base
                  bg-primary
                  hover:bg-opacity-90
                  font-normal
                  rounded-lg
                  "
                  >
               Get Started
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
    );
};

export default About;