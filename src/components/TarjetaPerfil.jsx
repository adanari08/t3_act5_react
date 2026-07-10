// Componente que recibe props
// Las props son datos que le pasa el componente
// lo que esta en parentesis es el props y usa nombre, edad y cerrea para mostrar datos y 
// esos vienen en App.jsx los datos yu se lo mandamos ahi cuando lo llamamos
function TarjetaPerfil(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>Edad: {props.edad}</p>
      <p>Carrera: {props.carrera}</p>
    </div>
  );
}

export default TarjetaPerfil;
