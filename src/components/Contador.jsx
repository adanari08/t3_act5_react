import { useState } from "react";

// Componente que usa useState para manejar un estado (el numero del contador)
function Contado() {
  // cuenta es la variable de estado y empieza en 0
  // setCuenta es la funcion que se usa para cambiar el valor de "cuenta"
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="Sube y Baja de Numeros">
      <h2>Contador: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar +1</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Restar -1</button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
    </div>
  );
}

export default Contado;
