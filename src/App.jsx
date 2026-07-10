import Saludo from "./components/Saludo";
import TarjetaPerfil from "./components/TarjetaPerfil";
import Contador from "./components/Contador";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Componente funcional simple */}
      <Saludo />

      <hr />

      {/* Componente que recibe props */}
      <TarjetaPerfil nombre="Kelly Cruz" edad={21} carrera="Ing. en Sistemas" />

      <hr />

      {/* Componente con useState */}
      <Contador />

      <hr />

      {/* Componente con lista dinamica (.map) */}
      <ListaTareas />
    </div>
  );
}

export default App;
