import React, { Component } from "react";
import Select from  "react-select";
const dados = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
];
export default class CalculadoraDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>
                    <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>
                    <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>  
                    <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>
                </div>
                <div class="row">
                <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>
                    <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>
                    <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>  
                    <div>
                        <select>
                            {dados.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))}                           
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}