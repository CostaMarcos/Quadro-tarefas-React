import React, { Component } from "react";
import {ReactComponent as CloseSVG} from "../../assets/img/close.svg";
import './style.css';
class CardNotas extends Component {
    apagar(){
        const index = this.props.index;
        this.props.deletarNota(index);
    }
    render() {
        return (
            <section className="card-nota">
                <CloseSVG onClick={this.apagar.bind(this)}/>
                <header>
                    <h3>{this.props.titulo}</h3>
                </header>
                <p>{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNotas;