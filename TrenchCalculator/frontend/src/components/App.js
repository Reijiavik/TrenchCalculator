import React, { Component } from "react";
import {createRoot} from "react-dom/client";
import CabeceraFija from "./CabeceraFija";
import CalculadoraDisplay from "./CalculadoraDisplay";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <div>
                <h1 >TITULO </h1>
            </div>
            <div > 
                <CabeceraFija /> 
                <div> 
                    <div class="displayCentrado" >
                        <CalculadoraDisplay />
                    </div>            
                </div>
            </div>

        </div>        
            
        )
    }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
