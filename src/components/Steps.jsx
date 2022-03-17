import React from 'react';
import Mockup from "../img/Mockup.png";
import "../App.css";
import "../tailwind.config";
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';

const Steps = () => {
    return (
<section class=" pb-12 lg:pb-[90px] flex justify-center">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span class="font-semibold text-lg text-primary mb-2 block">
               Nos services
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  Comment ça marche ?
               </h2>
               <p class="text-base text-body-color">
                  Votre transition vers l'anonymat sur internet prendra uniquement 3 étapes, elles seront automatisées et rapides à réaliser.
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full md:w-1/2 lg:w-1/3 px-4 text-center">
            <div
               class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8 
               "
               >
               <h1 class="font-bold text-5xl mb-2">1</h1>
               <h4 class="font-semibold text-xl text-dark mb-3">
                  Retrouvez vos données
               </h4>
               <p class="text-body-color">
                  Remettez la main sur vos données grâce à nos différents outils gratuits mis à votre disposition.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4 text-center">
            <div
               class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <h1 class="font-bold text-5xl mb-2">2</h1>
               <h4 class="font-semibold text-xl text-dark mb-3">
                  Supprimez vos données
               </h4>
               <p class="text-body-color">
                  Choisissez les données vous concernant que vous souhaitez supprimer, nos outils se chargeront de faire les démarches. 
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4 text-center">
            <div
               class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <h1 class="font-bold text-5xl mb-2">3</h1>
               <h4 class="font-semibold text-xl text-dark mb-3">
                  Patientez
               </h4>
               <p class="text-body-color">
                  Les outils réalisent les démarches directement mais il se peut que certaines données prennent du temps à se supprimer.
               </p>
            </div>
         </div>
      </div>
   </div>
</section>
    );
};

export default Steps;