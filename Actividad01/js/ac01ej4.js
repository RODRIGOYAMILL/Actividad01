/*
Descripcion: Actividad01 Ejercicio4 
Desarrollador: Rodrigo Yamill Rodriguez Avila
Fecha: 2024-04-20
Cambios: Ninguno
*/




// Solicitar al usuario que ingrese una frase
const frase = prompt("Ingrese una frase:");

// Convertir la frase a minúsculas y dividirla en un array de letras
const letras = frase.toLowerCase().split("");

// Definir un array con las vocales
const vocales = ["a", "e", "i", "o", "u"];

// Crear un array para almacenar el contador de apariciones de cada vocal
const contadorVocales = [0, 0, 0, 0, 0];

// Inicializar un contador para la letra "o"
let contadorO = 0;

// Recorrer cada letra de la frase
for (let i = 0; i < letras.length; i++) {
  // Verificar si la letra actual es una "o" y aumentar el contador correspondiente
  if (letras[i] === "o") {
    contadorO++;
  }

  // Verificar si la letra actual es una vocal y aumentar el contador correspondiente
  if (vocales.includes(letras[i])) {
    // Obtener el índice de la vocal en el array de vocales
    const indiceVocal = vocales.indexOf(letras[i]);
    
    // Aumentar el contador de la vocal correspondiente
    contadorVocales[indiceVocal]++;
  }
}

// Imprimir la cantidad de veces que aparece la letra "o"
console.log(`Cantidad de veces que aparece la letra "o": ${contadorO}`);

// Imprimir la cantidad de vocales que aparecen en la frase
console.log(`Vocales que aparecen: ${contadorVocales.filter((count) => count > 0).length}`);

// Recorrer el array de vocales y mostrar la cantidad de apariciones de cada una
vocales.forEach((vocal, index) => {
  // Verificar si la vocal tiene apariciones y mostrar su contador
  if (contadorVocales[index] > 0) {
    console.log(`${vocal}: ${contadorVocales[index]}`);
  }
});