
/*
Descripcion: Actividad01 Ejercicio1 
Desarrollador: Rodrigo Yamill Rodriguez Avila
Fecha: 2024-04-20
Cambios: Ninguno
*/

// Definición de nombres y apellidos
const nombres = ["juan", "maría", "pedro", "laura"];
const apellidos = ["gómez", "rodríguez", "pérez", "sánchez"];

// Array para almacenar los nombres completos formateados
const nuevoArray = [];

// Función que formatea un nombre y apellido en formato "Nombre Apellido"
function formatearNombreApellido(nombre, apellido) {
  // Formateo del nombre: primera letra en mayúscula y el resto en minúscula
  const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  
  // Formateo del apellido: primera letra en mayúscula y el resto en minúscula
  const apellidoFormateado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
  
  // Retorno del nombre y apellido formateados
  return nombreFormateado + " " + apellidoFormateado;
}

// Obtención de la cantidad de elementos a generar basado en la longitud de los arrays de nombres y apellidos
const cantidadElementos = Math.min(nombres.length, apellidos.length);

// Generación de nombres completos aleatorios
for (let i = 0; i < cantidadElementos; i++) {
  // Obtención de índices aleatorios para seleccionar un nombre y apellido
  const indiceNombre = Math.floor(Math.random() * nombres.length);
  const indiceApellido = Math.floor(Math.random() * apellidos.length);
  
  // Extracción y eliminación del nombre y apellido seleccionados de los arrays originales
  const nombreAleatorio = nombres.splice(indiceNombre, 1)[0];
  const apellidoAleatorio = apellidos.splice(indiceApellido, 1)[0];
  
  // Formateo del nombre y apellido seleccionados
  const nombreCompleto = formatearNombreApellido(nombreAleatorio, apellidoAleatorio);
  
  // Agregando el nombre completo formateado al nuevo array
  nuevoArray.push(nombreCompleto);
}

// Impresión del nuevo array con los nombres completos formateados
console.log(nuevoArray);