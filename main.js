
//Condicionales 

 /* 
function ingresarABodega(nombre, edad, dinero) {
  const edadMinima = 18;
  const compraMinima = 3000;

  if (edad >= edadMinima && dinero >= compraMinima && nombre !== "") {
    console.log(`¡Bienvenido, ${nombre}! Podés ingresar a la bodega.`);
  } else {
    console.log("No cumplís con los requisitos para ingresar.");
  }*/

// Lista de vinos disponibles
const vinos = [
  { nombre: "Malbec", precio: 3500 },
  { nombre: "Cabernet", precio: 4200 },
  { nombre: "Syrah", precio: 3900 }
];

                                           /* Hoola Profe Nacho... o tutor David, estuve complicado en esta semana para poder terminar el trabajo, tuve un par de inconvenientes, asi que tuve que usar chat gpt, les juro que estoy estudiando a full y tratando de entender cada cosa q explican...le voy agarrando la mano de a poco. saludos!*/ 
                                      

// Función para saludar
function saludar() {
  alert("¡Bienvenido a la Bodega Virtual!");
}

// Función para verificar ingreso
function verificarIngreso(nombre, edad, presupuesto) {
  if (edad >= 18 && presupuesto >= 3000 && nombre !== "") {
    console.log(`✅ Bienvenido ${nombre}, podés ingresar.`);
    return true; //return devuelve un valor desde una función al lugar donde fue llamada. 
  } else {
    console.log("❌ No cumplís con los requisitos para ingresar.");
    return false;
  }
}

/* En JavaScript, se usa forEach() cuando querés recorrer todos los elementos de un array y ejecutar una acción con cada uno. Es una forma moderna y legible de hacer un "bucle" sobre un array.*/ 

// Función para mostrar vinos
function mostrarVinos() {
  let lista = "🍷 Vinos disponibles:\n"; //Se usa \n (barra invertida + letra n), que es el carácter especial de salto de línea.
  vinos.forEach((vino, index) => {
    lista += `${index + 1}. ${vino.nombre} - $${vino.precio}\n`;
  });
  return lista;
}

// Función para elegir un vino
function elegirVino(presupuesto) {
  let eleccion;
  do {
    eleccion = parseInt(prompt(mostrarVinos() + "Elegí un vino ingresando su número:"));
  } while (isNaN(eleccion) || eleccion < 1 || eleccion > vinos.length);  //.length te dice cuántos elementos hay en el array.

  const vinoElegido = vinos[eleccion - 1];

  if (presupuesto >= vinoElegido.precio) {
    console.log(`🍷 Elegiste: ${vinoElegido.nombre} por $${vinoElegido.precio}`);
    return vinoElegido;
  } else {
    alert("❌ No tenés suficiente dinero para ese vino.");
    console.log("❌ Saldo insuficiente.");
    return null;
  }
}

// Función para confirmar la compra
function confirmarCompra(vino) {
  const confirmacion = confirm(`¿Querés comprar el ${vino.nombre} por $${vino.precio}?`);
  if (confirmacion) {
    alert("✅ ¡Compra realizada con éxito! Gracias por tu visita.");
    console.log("✅ Compra confirmada.");
  } else {
    alert("❌ Compra cancelada.");
    console.log("❌ Compra no realizada.");
  }
}

// Simulador principal
function simuladorBodega() {
  saludar();

  const nombre = prompt("Ingresá tu nombre:");
  const edad = parseInt(prompt("Ingresá tu edad:"));
  const presupuesto = parseInt(prompt("¿Con cuánto dinero contás?"));

  if (verificarIngreso(nombre, edad, presupuesto)) {
    const vino = elegirVino(presupuesto);
    if (vino) {
      confirmarCompra(vino);
    }
  } else {
    alert("No cumplís con los requisitos para ingresar a la bodega.");
  }

  alert("¡Hasta la próxima! 🍇");
}

// Ejecutar simulador
simuladorBodega();



