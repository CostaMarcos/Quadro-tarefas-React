import React, { Component } from "react";
import CardNotas from "../CardNotas/CardNotas";
import "./style.css";

class ListaNotas extends Component{
    render(){
        return(
            <ul className="lista-notas_ul">
                {Array.of("Trabalho","Estudo","Academia").map((e, index) => {
                    return (
                        <li key={index}>
                            <CardNotas></CardNotas>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaNotas;
