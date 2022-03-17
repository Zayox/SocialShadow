import React from 'react';
import Mockup from "../img/Mockup.png";
import "../App.css";
import "../tailwind.config";
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';
import AmirPhoto from '../img/amir.png';
import BastienPhoto from '../img/bastien.jpg';
import NicoPhoto from '../img/nico_2.jpg';

const Team = () => {
    return (
        <div class="h-[100vh] w-[100vw]">
            <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 flex justify-center">
                <div class="container">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4">
                            <div class="text-center mx-auto mb-[60px] max-w-[510px]">
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
                                    Notre équipe
                                </h2>
                                <p class="text-base text-body-color">
                                    Nous veillons sur votre sécurité et supprimons les informations qui n'ont rien à faire sur internet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center -mx-4">
                        <div class="w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="max-w-[370px] w-full mx-auto mb-10">
                                <div class="relative rounded-lg overflow-hidden">
                                    <img
                                        src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-01.jpg"
                                        alt="image"
                                        class="w-full"
                                    />
                                    <div class="absolute w-full bottom-5 left-0 text-center">
                                        <div
                                            class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                                        >
                                            <h3 class="text-base font-semibold text-dark">
                                                Benjamin Henriest
                                            </h3>
                                            <p class="text-sm text-body-color">Chef de projet</p>
                                            <div>
                           <span class="absolute left-0 bottom-0">
                              <svg
                                  width="61"
                                  height="30"
                                  viewBox="0 0 61 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="16"
                                     cy="45"
                                     r="45"
                                     fill="#13C296"
                                     fill-opacity="0.11"
                                 />
                              </svg>
                           </span>
                                                <span class="absolute top-0 right-0">
                              <svg
                                  width="20"
                                  height="25"
                                  viewBox="0 0 20 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="0.706257"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 1.58989)"
                                     fill="#3056D3"
                                 />
                              </svg>
                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="max-w-[370px] w-full mx-auto mb-10">
                                <div class="relative rounded-lg overflow-hidden">
                                    <img
                                        src={AmirPhoto}
                                        alt="image"
                                        class="w-full"
                                    />
                                    <div class="absolute w-full bottom-5 left-0 text-center">
                                        <div
                                            class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                                        >
                                            <h3 class="text-base font-semibold text-dark">
                                                Amir Moumen
                                            </h3>
                                            <p class="text-sm text-body-color">Developpeur</p>
                                            <div>
                           <span class="absolute left-0 bottom-0">
                              <svg
                                  width="61"
                                  height="30"
                                  viewBox="0 0 61 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="16"
                                     cy="45"
                                     r="45"
                                     fill="#13C296"
                                     fill-opacity="0.11"
                                 />
                              </svg>
                           </span>
                                                <span class="absolute top-0 right-0">
                              <svg
                                  width="20"
                                  height="25"
                                  viewBox="0 0 20 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="0.706257"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 1.58989)"
                                     fill="#3056D3"
                                 />
                              </svg>
                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="max-w-[370px] w-full mx-auto mb-10">
                                <div class="relative rounded-lg overflow-hidden">
                                    <img
                                        src={BastienPhoto}
                                        alt="image"
                                        class="w-full"
                                    />
                                    <div class="absolute w-full bottom-5 left-0 text-center">
                                        <div
                                            class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                                        >
                                            <h3 class="text-base font-semibold text-dark">
                                                Bastien Lefumeux
                                            </h3>
                                            <p class="text-sm text-body-color">Concepteur</p>
                                            <div>
                           <span class="absolute left-0 bottom-0">
                              <svg
                                  width="61"
                                  height="30"
                                  viewBox="0 0 61 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="16"
                                     cy="45"
                                     r="45"
                                     fill="#13C296"
                                     fill-opacity="0.11"
                                 />
                              </svg>
                           </span>
                                                <span class="absolute top-0 right-0">
                              <svg
                                  width="20"
                                  height="25"
                                  viewBox="0 0 20 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="0.706257"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 1.58989)"
                                     fill="#3056D3"
                                 />
                              </svg>
                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 px-4">
                            <div class="max-w-[370px] w-full mx-auto mb-10">
                                <div class="relative rounded-lg overflow-hidden">
                                    <img
                                        src={NicoPhoto}
                                        alt="image"
                                        class="w-full"
                                    />
                                    <div class="absolute w-full bottom-5 left-0 text-center">
                                        <div
                                            class="
                        bg-white
                        relative
                        rounded-lg
                        overflow-hidden
                        mx-5
                        py-5
                        px-3
                        "
                                        >
                                            <h3 class="text-base font-semibold text-dark">
                                                Nicolas Giliberto
                                            </h3>
                                            <p class="text-sm text-body-color">Concepteur</p>
                                            <div>
                           <span class="absolute left-0 bottom-0">
                              <svg
                                  width="61"
                                  height="30"
                                  viewBox="0 0 61 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="16"
                                     cy="45"
                                     r="45"
                                     fill="#13C296"
                                     fill-opacity="0.11"
                                 />
                              </svg>
                           </span>
                                                <span class="absolute top-0 right-0">
                              <svg
                                  width="20"
                                  height="25"
                                  viewBox="0 0 20 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                     cx="0.706257"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="24.3533"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 24.3533)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="18.6624"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 18.6624)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="12.9717"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 12.9717)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="7.28077"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 7.28077)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="0.706257"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 0.706257 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="6.39669"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 6.39669 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="12.0881"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 12.0881 1.58989)"
                                     fill="#3056D3"
                                 />
                                 <circle
                                     cx="17.7785"
                                     cy="1.58989"
                                     r="0.646687"
                                     transform="rotate(-90 17.7785 1.58989)"
                                     fill="#3056D3"
                                 />
                              </svg>
                           </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;