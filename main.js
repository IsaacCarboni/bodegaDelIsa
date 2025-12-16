
let vinos = [];
const btnMostrar = document.getElementById("btn-mostrar");
const lista = document.getElementById("lista");


const contenedor = document.getElementById ("contenedor-vinos");


// Traer los datos...

fetch("data/vinos.json")
  .then(respuesta => respuesta.json())
  .then(data => {
    mostrarVinos(data)

});

      // --- Constructor para crear vino ----

      function Vino(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
      }

            // -- cargo lo que haya en el storage---

            if (localStorage.getItem("vinos")){
                vinos = JSON.parse(localStorage.getItem("vinos"));
            }
               
            
               // ----Mostrar los vinos en pantalla-- 

               btnMostrar.addEventListener("click", () => {
                lista.innerHTML = "";

                vinos.forEach((vino) => {
                    const item = document.createElement("div");
                    item.innerHTML = `${vino.nombre} - $${vino.precio}`;
                    lista.appendChild(item);
                });
               });      