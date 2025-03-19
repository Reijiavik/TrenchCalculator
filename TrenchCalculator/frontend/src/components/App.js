import React, { Component } from "react";
import {createRoot} from "react-dom/client";
import CabeceraFija from "./CabeceraFija";
import Fondo from "./Fondo";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <>
        <div>

        <div>
            <h1 class="center">Testing React Code </h1>
        </div>
        <div > 
            <CabeceraFija /> 
            <div> 
                <Fondo /> 
            </div>
        </div>

        </div>        
        </>  
            
        )
    }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
