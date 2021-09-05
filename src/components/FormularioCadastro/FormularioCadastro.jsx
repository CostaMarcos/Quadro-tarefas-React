import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.nota = "";
    }

    handleTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    handleNota(evento) {
        evento.stopPropagation();
        this.nota = evento.target.value;
    }

    criarCard(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.nota);
    }

    render() {
        return (
            <>
            <form 
                className="formulario-cadastro_form"
                onSubmit={this.criarCard.bind(this)}
            >
                <input
                    className="formulario-cadastro_input"
                    type="text"
                    placeholder="Título"
                    onChange={this.handleTitulo.bind(this)}
                    maxLength="30"
                    required
                />
                <textarea
                    rows={15}
                    className="formulario-cadastro_input"
                    placeholder="Escreva sua nota..."
                    onChange={this.handleNota.bind(this)}
                    maxLength="50"
                    required
                />

                <button className="formulario-cadastro_submit formulario-cadastro_input">Criar nota</button>
            </form>
            </>
        );
    }
}

export default FormularioCadastro;