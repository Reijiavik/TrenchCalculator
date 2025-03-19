import React, { Component } from "react";

export default class Fondo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="fondo" >
            <img 
                style={{ maxWidth: "100%", height: "auto" }}
                src="https://images.squarespace-cdn.com/content/v1/637c0a5adafeb04f70309b99/9e5734bf-474e-4f42-900f-ecd6cb32d8bb/artillery+battery+760_f_small.jpg">
                </img> </div>

        )
    }
}