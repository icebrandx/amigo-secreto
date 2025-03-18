// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista de amigos

function agregarAmigo() {
  let input = document.getElementById("amigo"); // Captura el input
  let nombre = input.value.trim(); // Elimina espacios en blanco

  if (nombre === "") {
    alert("Por favor, inserte un nombre válido.");
    return;
  }

  amigos.push(nombre); // Agrega el amigo a la lista
  console.log("Lista de amigos:", amigos); // Muestra en consola para depuración

  actualizarLista(); // Llama la función para mostrar en pantalla
  input.value = ""; // Limpia el campo de entrada
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos"); // Selecciona el <ul>
  lista.innerHTML = ""; // Limpia la lista antes de actualizar

  amigos.forEach((amigo) => {
    let li = document.createElement("li"); // Crea un <li>
    li.textContent = amigo; // Agrega el nombre
    lista.appendChild(li); // Lo añade a la lista en HTML
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    // Validar que haya amigos en la lista
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatorio
  let amigoSorteado = amigos[indiceAleatorio]; // Obtener nombre

  let resultado = document.getElementById("resultado"); // Obtener <ul> resultado
  resultado.innerHTML = `<li>${amigoSorteado}</li>`; // Mostrar nombre en lista
}
