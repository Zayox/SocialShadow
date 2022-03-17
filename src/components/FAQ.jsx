import React from 'react';
import Mockup from "../img/Mockup.png";
import "../App.css";
import "../tailwind.config";
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';

const FAQ = () => {
    return (

      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
         <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">FAQ</p>
         <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Questions Fréquentes</h2>
         <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-700">
            <details>
               <summary className="py-2 outline-none cursor-pointer focus:underline">Est-ce que SocialShadow est gratuit ?</summary>
               <div className="px-4 pb-4">
                  <p>SocialShadow est complètement gratuit et le restera, nous tenons à ce que l'anonymat sur internet reste un droit pour tout le monde, même les personnes qui ne s'y connaissent pas</p>
               </div>
            </details>
            <details>
               <summary className="py-2 outline-none cursor-pointer focus:underline">Ai-je besoin de vérifier mon identité ?</summary>
               <div className="px-4 pb-4">
                  <p>Certaines informations peuvent nécessiter un justificatif d'identité afin d'être supprimmées, cependant nous ne conservons pas ces documents.</p>
               </div>
            </details>
            <details>
               <summary className="py-2 outline-none cursor-pointer focus:underline">Pourquoi dois-je supprimer mes données ?</summary>
               <div className="px-4 pb-4 space-y-2">
                  <p>Dans un écosystème en totale relation avec la technologie, il est devenu compliqué d être anonyme sur internet. De plus en plus de personnes se font espionner et sont victimes d injustice parce que leur vie privée est complètement dévoilée sur internet, à la portée de n importe qui.</p>
               </div>
            </details>
            <details>
               <summary className="py-2 outline-none cursor-pointer focus:underline">Comment supprimez-vous mes données ?</summary>
               <div className="px-4 pb-4 space-y-2">
                  <p>La loi oblige toute entreprise qui excerce une activité en France à pouvoir supprimer des données sous demande d'un utilisateur, des démarches sont à faire pour pouvoir les supprimer et SocialShadow les automatises.</p>
               </div>
            </details>
         </div>
      </div>
   </section>
    );
};

export default FAQ;