import React, { Component } from "react";
import './style.css';

class ListaCategorias extends Component {
    _handlerInput(e) {
        if (e.key === "Enter" && e.target.value != "") {
            this.props.criarCategoria(e.target.value);
        }
    }
    render() {
        return (
            <section className="lista-categoria_section">
                <ul className="lista-categoria_section">
                    {this.props.categorias.map((categoria, index) => {
                        return <li className="lista-categoria_li" key={index}>{categoria}</li>
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categoria_input"
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handlerInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaCategorias;