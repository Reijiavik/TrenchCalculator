import React, { Component } from "react";
import Select from "react-select";
import { calcularProbabilidades } from "./LogicaCalculadora";

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
        this.state = {
            dadosBaseAcertar: "",
            dadosBonoAcertar: "",
            dadosMinusAcertar: "",
            covertura: "",
            dadosBaseHerir: "",
            dadosBonoHerir: "",
            dadosMinusHerir: "",
            armadura: "",
            probabilidadAcertar: 0,
            probabilidadHerir: 0
        };
    }

    handleChange = (field) => (event) => {
        this.setState({ [field]: event.target.value }, this.calcularProbabilidades);
    };

    calcularProbabilidades = () => {
        const { dadosBaseAcertar, dadosBonoAcertar, dadosMinusAcertar, covertura, dadosBaseHerir, dadosBonoHerir, dadosMinusHerir, armadura } = this.state;
        const { probabilidadAcertar, probabilidadHerir } = calcularProbabilidades(dadosBaseAcertar, dadosBonoAcertar, dadosMinusAcertar, covertura, dadosBaseHerir, dadosBonoHerir, dadosMinusHerir, armadura);
        this.setState({ probabilidadAcertar, probabilidadHerir });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div>
                        <select onChange={this.handleChange('dadosBaseAcertar')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.dadosBaseAcertar}</h1>
                    </div>
                    <div>
                        <select onChange={this.handleChange('dadosBonoAcertar')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.dadosBonoAcertar}</h1>
                    </div>
                    <div>
                        <select onChange={this.handleChange('dadosMinusAcertar')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.dadosMinusAcertar}</h1>
                    </div>
                    <div>
                        <select onChange={this.handleChange('covertura')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.covertura}</h1>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <select onChange={this.handleChange('dadosBaseHerir')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.dadosBaseHerir}</h1>
                    </div>
                    <div>
                        <select onChange={this.handleChange('dadosBonoHerir')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.dadosBonoHerir}</h1>
                    </div>
                    <div>
                        <select onChange={this.handleChange('dadosMinusHerir')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.dadosMinusHerir}</h1>
                    </div>
                    <div>
                        <select onChange={this.handleChange('armadura')}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h1>Opcion: {this.state.armadura}</h1>
                    </div>
                </div>
                <div>
                    <h2>Probabilidad de Acertar: {this.state.probabilidadAcertar * 100}%</h2>
                    <h2>Probabilidad de Herir: {this.state.probabilidadHerir * 100}%</h2>
                </div>
            </div>
        );
    }
}