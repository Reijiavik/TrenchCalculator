import React, { Component } from "react";

export default class CabeceraFija extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
             </div>
        )
    }
}