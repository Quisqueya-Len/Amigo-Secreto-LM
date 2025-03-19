// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtener el campo de entrada
    const nombre = input.value.trim(); // Eliminar espacios en blanco
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); // Validar entrada vacía
        return;
    }
    
    listaAmigos.push(nombre); // Agregar nombre a la lista
    actualizarLista(); // Actualizar la visualización de la lista
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista mostrada en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtener la lista en el HTML
    lista.innerHTML = ""; // Limpiar contenido previo
    listaAmigos.forEach(nombre => {
        const li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = nombre; // Asignar el nombre al elemento
        lista.appendChild(li); // Agregarlo a la lista en el HTML
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear."); // Validar lista vacía
        return;
    }
    
    const indiceGanador = Math.floor(Math.random() * listaAmigos.length); // Seleccionar un índice aleatorio
    const ganador = listaAmigos[indiceGanador]; // Obtener el nombre ganador
    
    const resultado = document.getElementById("resultado"); // Obtener la lista de resultados en el HTML
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`; // Mostrar el ganador
}
