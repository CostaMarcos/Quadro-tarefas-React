import React, { Component } from "react";
import './style.css';
class CardNotas extends Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>
        );
    }
}

export default CardNotas;