/*
Descripcion: Actividad01 Ejercicio3 
Desarrollador: Rodrigo Yamill Rodriguez Avila
Fecha: 2024-04-20
Cambios: Ninguno
*/



const N = 30;
let PrimosMenores110 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107];

// Función para generar N números primos aleatorios menores que 110
function generarNumerosPrimos() {
    return PrimosMenores110.slice(0, N);
}

// Imprimir números primos generados
console.log("Números primos generados:");
let primos = generarNumerosPrimos();
primos.forEach(numero => {
    console.log(numero);
});




/*
let PrimosMenores110 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107];

// Función para generar n números primos aleatorios menores que 110
function generarNumerosPrimos(cantidad) {
    return PrimosMenores110.slice(0, cantidad);
}

// Obtenemos la cantidad de primos deseada desde los argumentos de la línea de comandos
let cantidad = process.argv[2];

let primos = generarNumerosPrimos(parseInt(cantidad));
console.log("Números primos generados:");
primos.forEach(numero => {
    console.log(numero);
});
*/