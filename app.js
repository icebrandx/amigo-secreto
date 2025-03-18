// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo"); // Captura el input
  let nombre = input.value.trim(); // Obtiene el valor sin espacios extra

  if (nombre === "") {
    alert("Por favor, inserte un nombre."); // Validación del campo vacío
    return;
  }

  amigos.push(nombre); // Agregar al array
  console.log("Lista de amigos:", amigos); // Muestra la lista en la consola

  input.value = ""; // Limpia el campo
}
