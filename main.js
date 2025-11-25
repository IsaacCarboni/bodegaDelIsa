<<<<<<< HEAD

//Segunda preentrega:
/*
Entrega N°2
Estructura del simulador
Objetivos generales

Mostrar tu simulador JS interactuando con HTML

Integrar las herramientas JS aprendidas hasta aquí

Objetivos específicos

Modifica su estructura anterior, integrando JS con JavaScript mediante el uso de DOM y Eventos.

Programa el circuito de interacción completo de la lógica de tu aplicación web, agregando las nuevas herramientas JS aprendidas

Guarda tus objetos o arrays de objetos en localstorage para dejar disponible los datos agregados por el usuario ejemplo(los productos en un carrito de compras)

Se debe entregar

Documento HTML + CSS (al menos uno)

Archivo(s) JS referenciado(s) en el HTML
=======
//Primera preentrega:
/*
-Variables
-Condicionales
-Ciclos
-Funciones
-Arrays / Metodos
>>>>>>> 5a8323e35f910438b60023f9d895ee185cfd5bf9

*/


const vinos = [
  {nombre: "Malbec", precio: 3500},
{nombre: "Cabernet", precio: 4500},
{nombre: "Merlot", precio: 3200}
];

function saludarCliente(){
  alert("Bienvenido a la Bodega IsaYa");
}

function verificarIngreso(nombre, edad, dinero){
  if (edad >= 18 && dinero >= 3000 && nombre !== ""){
    console.log(`${nombre}, podes entrar a la bodega.`);
    return true;
  } else{
    console.log("No cumples con los requisitos para ingresar.");
    return false;
  }
}


function mostrarVinos(){
  console.log("Lista de vinos disponibles");
  for (let i = 0; i < vinos.length; i++){
    console.log(`${i + 1}. ${vinos[i].nombre} - $${vinos[i].precio}`);
  }
}

function elegirVino(dineroDisponible){
  let eleccion = parseInt(prompt("elegi un vino: \n1. Malbec\n2. Cabernet\n3. Merlot"));
  let vinoElegido = vinos[eleccion - 1];


  if (vinoElegido && dineroDisponible >= vinoElegido.precio){
    alert(`Compraste un ${vinoElegido.nombre}por $${vinoElegido.precio}`);

    console.log(`compra realizada: ${vinoElegido.nombre} - $${vinoElegido.precio}`);
  }
  else{
    alert('opcion invalida o saldo insuficiente.');
    console.log("compra no realizada.");
  }
}

//simulacion completa ... 
function simuladorBodega(){
  saludarCliente();

  let nombre = prompt("Ingresa tu nombre:");
  let edad = parseInt (prompt("ingresa tu edad:"));
  let dinero = parseInt(prompt("con cuanto dinero contas?"));

  if (verificarIngreso(nombre, edad, dinero)) {

    mostrarVinos();
    elegirVinos(dinero);
    alert("Gracias por tu visita");
  } else{
    alert("No podes entrar a la bodega.");
  }
}
simuladorBodega();

<<<<<<< HEAD

=======
// despues voy a hacerlo con forEach.


/*hola
como
andás?*/
>>>>>>> 5a8323e35f910438b60023f9d895ee185cfd5bf9
