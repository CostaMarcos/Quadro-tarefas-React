import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";
import "./assets/App.css";

export class App extends Component {
  render() {
    return (
      <div className="main">
        <FormularioCadastro></FormularioCadastro>
        <ListaNotas></ListaNotas>
      </div>
    );
  }

}

export default App;
