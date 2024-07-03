/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3
Output: El 15 es el número más grande
*/

const numero1 = parseInt(prompt('Escribe un número'))
const numero2 = parseInt(prompt('Escribe otro número'))

if(numero1 >= numero2){
    document.write(`<h2> El número mayor es: ${numero1}</h2>`)
}else if(numero1 <= numero2){
    document.write(`<h2> El número mayor es: ${numero2}</h2>`)
}