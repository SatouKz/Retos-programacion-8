const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "flexbox",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  cosasQueAprendimos.forEach((cosa) => {//forEach para recorrer el array
    const nuevoItem = document.createElement("li"); //crear elemento li
    nuevoItem.innerText = cosa.tema; //texto del li
    cosa.class && nuevoItem.classList.add(cosa.class); //si el elemento existe agregar el nuevoItem
    document.querySelector("ul.lista").appendChild(nuevoItem); // seleccion de la lista y agregar hijo
  });
}

main();
