import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";
import "./assets/App.css";

export class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }

    this.setState(novoEstado);
  }
  render() {
    return (
      <div className="main">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </div>
    );
  }

}

export default App;
