import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";
import "./assets/App.css";

export class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Sem categoria"]
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }

    this.setState(novoEstado);
  }

  deletarNota(indice) {
    const arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas });
  }

  criarCategoria(titulo){
    if(this.state.categorias.length < 4){
      const novaCategoria = [...this.state.categorias, titulo];
      const novoEstado = {
        ...this.state,
        categorias: novaCategoria
      };
  
      this.setState(novoEstado);
    }
  }

  render() {
    return (
      <div className="main">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} />
        <main>
          <ListaCategorias
            categorias={this.state.categorias} 
            criarCategoria={this.criarCategoria.bind(this)}/>
        </main>
        <ListaNotas
          deletarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </div>
    );
  }

}

export default App;
