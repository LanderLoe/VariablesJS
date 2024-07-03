/* Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
 */

const numero1 = parseInt(prompt('Escribe un número'))
const numero2 = parseInt(prompt('Escribe otro número'))
const suma = (numero1 + numero2)

document.write(`<h2> La suma de los números es: ${suma}</h2>`)