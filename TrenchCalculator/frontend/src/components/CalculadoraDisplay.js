import React, { Component } from "react";
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
            dadosBaseAcertar: "0",
            dadosBonoAcertar: "0",
            dadosMinusAcertar: "0",
            covertura: "0",
            dadosBaseHerir: "0",
            dadosBonoHerir: "0",
            dadosMinusHerir: "0",
            armadura: "0",
            probabilidadAcertar: 0,
            probabilidadAcertarSinHerir: 0,
            probabilidadHerir: 0,
            probabilidadTumbar: 0,
            probabilidadMatar: 0
        };
    }

    handleChange = (field) => (event) => {
        this.setState({ [field]: event.target.value }, this.calcularProbabilidades);
    };

    calcularProbabilidades = () => {
        const { dadosBaseAcertar, dadosBonoAcertar, dadosMinusAcertar, covertura, dadosBaseHerir, dadosBonoHerir, dadosMinusHerir, armadura } = this.state;
        const { probabilidadAcertar, probabilidadAcertarSinHerir, probabilidadHerir, probabilidadTumbar, probabilidadMatar } = calcularProbabilidades(
            parseInt(dadosBaseAcertar),
            parseInt(dadosBonoAcertar),
            parseInt(dadosMinusAcertar),
            parseInt(covertura),
            parseInt(dadosBaseHerir),
            parseInt(dadosBonoHerir),
            parseInt(dadosMinusHerir),
            parseInt(armadura)
        );
        this.setState({ probabilidadAcertar, probabilidadAcertarSinHerir, probabilidadHerir, probabilidadTumbar, probabilidadMatar });
    };

    render() {
        const { dadosBaseAcertar, dadosBonoAcertar, dadosMinusAcertar, covertura, dadosBaseHerir, dadosBonoHerir, dadosMinusHerir, armadura } = this.state;

        return (
            <div className="displayCentrado">
                <div className="row">
                    <div>
                        <label>Dados Base Acertar:</label>
                        <select onChange={this.handleChange('dadosBaseAcertar')} value={dadosBaseAcertar}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Dados Bono Acertar:</label>
                        <select onChange={this.handleChange('dadosBonoAcertar')} value={dadosBonoAcertar}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Dados Minus Acertar:</label>
                        <select onChange={this.handleChange('dadosMinusAcertar')} value={dadosMinusAcertar}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Covertura:</label>
                        <select onChange={this.handleChange('covertura')} value={covertura}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label>Dados Base Herir:</label>
                        <select onChange={this.handleChange('dadosBaseHerir')} value={dadosBaseHerir}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Dados Bono Herir:</label>
                        <select onChange={this.handleChange('dadosBonoHerir')} value={dadosBonoHerir}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Dados Minus Herir:</label>
                        <select onChange={this.handleChange('dadosMinusHerir')} value={dadosMinusHerir}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Armadura:</label>
                        <select onChange={this.handleChange('armadura')} value={armadura}>
                            {dados.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="resultados">
                    <h2>Probabilidad de Acertar: {this.state.probabilidadAcertar * 100}%</h2>
                    <h2>Probabilidad de Acertar sin Herir: {this.state.probabilidadAcertarSinHerir * 100}%</h2>
                    <h2>Probabilidad de Herir: {this.state.probabilidadHerir * 100}%</h2>
                    <h2>Probabilidad de Tumbar: {this.state.probabilidadTumbar * 100}%</h2>
                    <h2>Probabilidad de Matar: {this.state.probabilidadMatar * 100}%</h2>
                </div>
            </div>
        );
    }
}