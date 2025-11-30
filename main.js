//Primera preentrega:
/*
-Variables
-Condicionales
-Ciclos
-Funciones
-Arrays / Metodos

*/


// const vinos = [
//   {nombre: "Malbec", precio: 3500},
// {nombre: "Cabernet", precio: 4500},
// {nombre: "Merlot", precio: 3200}
// ];

// function saludarCliente(){
//   alert("Bienvenido a la Bodega IsaYa");
// }

// function verificarIngreso(nombre, edad, dinero){
//   if (edad >= 18 && dinero >= 3000 && nombre !== ""){
//     console.log(`${nombre}, podes entrar a la bodega.`);
//     return true;
//   } else{
//     console.log("No cumples con los requisitos para ingresar.");
//     return false;
//   }
// }


// function mostrarVinos(){
//   console.log("Lista de vinos disponibles");
//   for (let i = 0; i < vinos.length; i++){
//     console.log(`${i + 1}. ${vinos[i].nombre} - $${vinos[i].precio}`);
//   }
// }

// function elegirVino(dineroDisponible){
//   let eleccion = parseInt(prompt("elegi un vino: \n1. Malbec\n2. Cabernet\n3. Merlot"));
//   let vinoElegido = vinos[eleccion - 1];


//   if (vinoElegido && dineroDisponible >= vinoElegido.precio){
//     alert(`Compraste un ${vinoElegido.nombre}por $${vinoElegido.precio}`);

//     console.log(`compra realizada: ${vinoElegido.nombre} - $${vinoElegido.precio}`);
//   }
//   else{
//     alert('opcion invalida o saldo insuficiente.');
//     console.log("compra no realizada.");
//   }
// }

// //simulacion completa ... 
// function simuladorBodega(){
//   saludarCliente();

//   let nombre = prompt("Ingresa tu nombre:");
//   let edad = parseInt (prompt("ingresa tu edad:"));
//   let dinero = parseInt(prompt("con cuanto dinero contas?"));

//   if (verificarIngreso(nombre, edad, dinero)) {

//     mostrarVinos();
//     elegirVinos(dinero);
//     alert("Gracias por tu visita");
//   } else{
//     alert("No podes entrar a la bodega.");
//   }
// }
// simuladorBodega();
             
// ------------------------------------------------------
// Array donde guardo los vinos
 

let vinos = [];

      // --- Constructor para crear vino ----

      function Vino(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
      }

            // -- cargo lo que haya en el storage---

            if (localStorage.getItem("vinos")){
                vinos = JSON.parse(localStorage.getItem("vinos"));
            }

               //---Elementos del DOM---

               const form = document.getElementById("form-vino");
               const lista = document.getElementById("lista");
                  const btnMostrar = document.getElementById("btn-mostrar");
               const botones = document.querySelectorAll(".btn-comprar");


               // evento para agreagar vino desde el formulario-----
               form.addEventListener("submit", (e) => {
                e.preventDefault();

                const nombre = document.getElementById("nombre").value;
                const precio = parseFloat(document.getElementById("precio").value);

                const nuevoVino = new Vino(nombre, precio);

                vinos.push(nuevoVino);
                localStorage.setItem("vinos", JSON.stringify(vinos));

                form.reset();
               });
               
               // evemtos de los btones de las tarjetas----

               botones.forEach((boton) => {
                boton.addEventListener("click", (e) => {

                    const nombre = e.target.dataset.nombre;
                    const precio = parseFloat(e.target.dataset.precio);

                    const vino = new Vino(nombre, precio);
                    vinos.push(vino);
                    localStorage.setItem("vinos", JSON.stringify(vinos));
                });
               });


               // ----Mostrar los vinos en pantalla-- 

               btnMostrar.addEventListener("click", () => {
                lista.innerHTML = "";

                vinos.forEach((vino) => {
                    const item = document.createElement("div");
                    item.innerHTML = `${vino.nombre} - $${vino.precio}`;
                    lista.appendChild(item);
                });
               });