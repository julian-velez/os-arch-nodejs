// Importamos el módulo 'os' de Node.js, que nos permite obtener información del sistema operativo.
const os = require('node:os');

// Llamamos al método 'arch()' del módulo 'os', que devuelve la arquitectura del procesador
// de la computadora en la que se está ejecutando el código. 
// Puede devolver valores como 'x64' (arquitectura de 64 bits) o 'arm' (arquitectura ARM).
console.log(os.arch()); 
