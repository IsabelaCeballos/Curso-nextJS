import { Component } from "react/cjs/react.production.min";
import { useState } from "react";

export default function App({Component, pageProps}){
    const [counter, setCounter] = useState(0);
    return(
        //custom app
        <>
            <h1 onClick={()=> setCounter(counter +1)}>Counter externo: {counter}</h1>
            <Component {...pageProps} counter = {counter}/> 
        </>
    );
}