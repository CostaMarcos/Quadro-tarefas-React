import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
    constructor() {
        super();
        this.titulo = "";
        this.nota = "";
    }

    getTitulo(evento){
        this.titulo = evento.target.value;

        console.log(this.titulo);
    }
    render() {
        return (
            <form className="formulario-cadastro_form">
                <input 
                    className="formulario-cadastro_input" 
                    type="text" 
                    placeholder="Título"
                    onChange={this.getTitulo.bind(this)} 
                />
                <textarea rows={15} className="formulario-cadastro_input" placeholder="Escreva sua nota..." />
                <button className="formulario-cadastro_submit formulario-cadastro_input">Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;