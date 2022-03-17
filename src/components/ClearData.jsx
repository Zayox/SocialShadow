import React, {useRef, useState} from 'react';
import Logo from "../img/logo.png";
import instaLogo from "../img/instaLogo.png";
import LogoFB from "../img/facebook.png";
import TwitterLogo from "../img/twitterLogo.png";



const ClearData = ({getLogin, username}) => {

    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [response, setResponse] = useState(null);


    const requestClear = async (e) => {
        e.preventDefault();
        setResponse(false);
        const res = await fetch('https://peaceful-sea-48607.herokuapp.com/clear', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                pass: passRef.current.value
            })
        })
        res ? setResponse(true) : setResponse(false);
    }


    const loading = () => {
        if(response){
            return <h1>DONE</h1>
        }
        else if(response !==null){
            return <h1>LOADING...</h1>
        }
    }

    const Instagram = () => {
        var object = this.refs.ig;
    }


    return (
        <div className="h-[100vh]">
            <div className="flex flex-col justify-center items-center" >
            <ul class="flex mt-8">
                <li class="mr-6">
                    <a class="text-black-500 hover:text-gray-800" onClick={Instagram} href="#">Instagram</a>
                </li>
                <li class="mr-6">
                    <a class="text-black-500 hover:text-gray-800" href="#">Facebook</a>
                </li>
                <li class="mr-6">
                    <a class="text-black-500 hover:text-gray-800" href="#">Twitter</a>
                </li>
                <li class="mr-6">
                    <a class="text-gray-400 cursor-not-allowed" href="#">Google</a>
                </li>
            </ul>
            {getLogin ? <div className="lg:w-[50vw] md:w-[50vw] w-[90vw]" id="ig">
                <form className="flex flex-col justify-center items-center lg:mt-8 md:mt-8 mt-8 p-14 rounded-2xl shadow-lg">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={instaLogo}
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl text-gray-900">Supprimez vos données Instagram</h2>
                    </div>
                    <input type="email" placeholder="Email" ref={emailRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <input placeholder="Password" type="password" ref={passRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                        <p className="text-xl align-center ml-3">Mettre mon compte en privée</p>
                    </div>
                    <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                        <p className="text-xl align-center ml-3">Refuser les messages d'inconnus</p>
                    </div>
                    <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                        <p className="text-xl align-center ml-3">Supprimer mon compte</p>
                    </div>
                    
                </form>


                {loading()}

            </div>
                : <h1 className="flex justify-center items-center">You're unable to access this page without being logged in.</h1>}

            {getLogin ? <div className="lg:w-[50vw] md:w-[50vw] w-[90vw]">
                    <form className="flex flex-col justify-center items-center lg:mt-44 md:mt-44 mt-28 p-14 rounded-2xl shadow-lg">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src={LogoFB}
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl text-gray-900">Supprimez vos données Instagram</h2>
                        </div>
                        <input type="email" placeholder="Email" ref={emailRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                        <input placeholder="Password" type="password" ref={passRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                        <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                        <p className="text-xl align-center ml-3">Mettre mon compte en privée</p>
                    </div>
                    <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                        <p className="text-xl align-center ml-3">Ne pas apparaitre en recherche</p>
                    </div>
                    <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                        <p className="text-xl align-center ml-3">Supprimer mon compte</p>
                    </div>
                    </form>


                    {loading()}

                </div>
                : <h1 className="flex justify-center items-center">You're unable to access this page without being logged in.</h1>}

                {getLogin ? <div className="lg:w-[50vw] md:w-[50vw] w-[90vw]">
                        <form className="flex flex-col justify-center items-center lg:mt-44 md:mt-44 mt-28 p-14 rounded-2xl shadow-lg">
                            <div>
                                <img
                                    className="mx-auto h-12 w-auto"
                                    src={TwitterLogo}
                                    alt="Workflow"
                                />
                                <h2 className="mt-6 text-center text-3xl text-gray-900">Supprimez vos données Twitter</h2>
                            </div>
                            <input type="email" placeholder="Email" ref={emailRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                            <input placeholder="Password" type="password" ref={passRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                            <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                        <p className="text-xl align-center ml-3">Mettre mon compte en privée</p>
                        </div>
                        <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                            <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                            <p className="text-xl align-center ml-3">Supprimer mes anciens tweets</p>
                        </div>
                        <div className="mt-6 flex flex-row w-[30vw] justify-center items-center">
                            <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>Valider</button>
                            <p className="text-xl align-center ml-3">Supprimer mon compte</p>
                        </div>
                        </form>


                        {loading()}

                    </div>
                    : <h1 className="flex justify-center items-center">You're unable to access this page without being logged in.</h1>}
            </div>
        </div>
    );
};

export default ClearData;