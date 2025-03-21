import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import CabeceraFija from "./CabeceraFija";
import CalculadoraDisplay from "./CalculadoraDisplay";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>CALCULADORA DE TRENCH CRUSADE</h1>
                </div>
                <div>
                    <CabeceraFija />
                    <div>
                            <CalculadoraDisplay />

                    </div>
                </div>
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
