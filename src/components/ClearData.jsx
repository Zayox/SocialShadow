import React, {useRef, useState, useEffect} from 'react';
import instaLogo from "../img/instaLogo.png";
import LogoFB from "../img/facebook.png";
import TwitterLogo from "../img/twitterLogo.png";



const ClearData = ({getLogin, username}) => {

    const url = "https://www.google.fr/";
    const [screenshot, setScreenshot] = useState(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [response, setResponse] = useState(null);
    const [bool, setBool] = useState(false);

    const requestScreenshot = async () => {
        const res = await fetch('https://peaceful-sea-48607.herokuapp.com/screenshot', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url,
                name: username
            })
        }).then(data => data.json())

        setScreenshot(`http://localhost:3000/static/screens/${res.ID}.png`);
    }


    if(!bool){
        requestScreenshot();
        setBool(true);
    }




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


    return (
        <div className="h-[100vh]">
            <div className="flex flex-col justify-center items-center">
                {getLogin ? <h1 className="text-2xl mt-24 pb-14">Voici ce que l'on peut voir de vous sur le moteur de recherche le plus utilisé au monde :</h1> : null}
                {getLogin ? <img src={screenshot} alt=""/> : null}
            {getLogin ? <div className="lg:w-[50vw] md:w-[50vw] w-[90vw]">
                <form className="flex flex-col justify-center items-center lg:mt-44 md:mt-44 mt-28 p-14 rounded-2xl shadow-lg">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={instaLogo}
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl text-gray-900">{username}, it's time to clear your data!</h2>
                    </div>
                    <input type="email" placeholder="Email" ref={emailRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <input placeholder="Password" type="password" ref={passRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <div className="flex">
                            <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md relative top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>ClearData</button>
                            <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md relative top-[2rem] hover:top-[1.6rem] duration-300 ml-20" onClick={requestClear}>Delete Photos</button>
                    </div>
                </form>


                {loading()}

            </div>
                : <h1 className="mt-80">Vous ne pouvez pas accéder à cette page si vous n'êtes pas connecté.</h1>}

            {getLogin ? <div className="lg:w-[50vw] md:w-[50vw] w-[90vw]">
                    <form className="flex flex-col justify-center items-center lg:mt-44 md:mt-44 mt-28 p-14 rounded-2xl shadow-lg">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src={LogoFB}
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl text-gray-900">{username}, it's time to clear your data!</h2>
                        </div>
                        <input type="email" placeholder="Email" ref={emailRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                        <input placeholder="Password" type="password" ref={passRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                        <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md relative top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>ClearData</button>
                    </form>


                    {loading()}

                </div>
                : null}

                {getLogin ? <div className="lg:w-[50vw] md:w-[50vw] w-[90vw]">
                        <form className="flex flex-col justify-center items-center lg:mt-44 md:mt-44 mt-28 p-14 rounded-2xl shadow-lg">
                            <div>
                                <img
                                    className="mx-auto h-12 w-auto"
                                    src={TwitterLogo}
                                    alt="Workflow"
                                />
                                <h2 className="mt-6 text-center text-3xl text-gray-900">{username}, it's time to clear your data!</h2>
                            </div>
                            <input type="email" placeholder="Email" ref={emailRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                            <input placeholder="Password" type="password" ref={passRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                            <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md relative top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>ClearData</button>
                        </form>


                        {loading()}

                    </div>
                    : null}
            </div>
        </div>
    );
};

export default ClearData;