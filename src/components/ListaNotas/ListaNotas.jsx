import React, { Component } from "react";
import CardNotas from "../CardNotas/CardNotas";
import "./style.css";

class ListaNotas extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul className="lista-notas_ul">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index}>
                            <CardNotas 
                                index={index}
                                deletarNota={this.props.deletarNota}
                                titulo={nota.titulo} 
                                texto={nota.texto}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaNotas;
