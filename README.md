# t3_act5_react

Este es mi primer proyecto en React . Lo hice para la actividad "Introducción a React" usando **Vite + React**, siguiendo el video del curso de React desde cero.

## ¿Qué hace el proyecto?

Es una mini aplicación lo cual contiene:

1. **Saludo.jsx** :un componente funcional simple, solo muestra un título y un texto.
2. **TarjetaPerfil.jsx** : un componente que recibe **props** (nombre, edad, carrera) y las muestra en pantalla.
3. **Contador.jsx** : un componente que usa **useState** para llevar la cuenta de un número, con botones para sumar, restar y reiniciar.
4. **ListaTareas.jsx** : una lista de tareas donde puedo agregar y eliminar tareas. Usa `useState` para guardar el arreglo de tareas y `.map()` para pintarlas en pantalla.

## Cómo correrlo en mi computadora

```bash
npm install
npm run dev
```

## Cómo lo desplegué en GitHub Pages

```bash
npm install gh-pages --save-dev
npm run deploy
```

Y luego en GitHub, en Settings > Pages, configuré la fuente en la rama `gh-pages`.

---

## Preguntas

**a) ¿Qué diferencia hay entre props y state en React?**

Las props son datos que un componente recibe desde "afuera", normalmente desde el componente padre, y el componente que las recibe no las puede modificar (son de solo lectura). En cambio, el state es un dato que vive dentro del propio componente y sí se puede cambiar, por ejemplo con `useState`. En mi proyecto, `TarjetaPerfil` usa props (el nombre, la edad y la carrera se los paso desde `App.jsx`), y `Contador` usa state (el número del contador cambia solo, dentro de ese componente).

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**

Porque React usa la `key` para identificar cada elemento de la lista y saber cuál cambió, cuál se agregó o cuál se eliminó, sin tener que volver a dibujar toda la lista completa. Si no le pongo una key (o uso una mal puesta), React puede confundirse y mostrar los elementos en un orden raro o con datos mezclados, además de que en la consola marca una advertencia. En mi `ListaTareas` uso el `index` del arreglo como key.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**

`useState` es un Hook que sirve para que un componente pueda "recordar" un valor y que cuando ese valor cambie, la pantalla se vuelva a dibujar mostrando el valor nuevo. Se usa así: `const [valor, setValor] = useState(valorInicial)`, donde `valor` es el dato actual y `setValor` es la función que uso para cambiarlo. Yo lo usé en el componente `Contador`, donde `cuenta` empieza en 0 y cada vez que doy click en los botones uso `setCuenta` para sumar, restar o reiniciar el número. También lo usé en `ListaTareas` para guardar el arreglo de tareas y el texto que voy escribiendo en el input.

**d) Pega el enlace de tu repositorio de GitHub.**

https://github.com/adanari08/t3_act5_react


**e) Pega el enlace de tu proyecto ya desplegado en GitHub Pages.**

https://adanari08.github.io/t3_act5_react/
