import React, { Component } from "react";

export default class CabeceraFija extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="center" id="navbar">
                <a href="./">RESETEAR</a>
                <a href="#news"></a>
                <a href="#contact"></a>
             </div>
        )
    }
}