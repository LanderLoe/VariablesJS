/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9
Output: El 15 es el número más grande
*/

const numero1 = parseInt(prompt('Escribe un número'))
const numero2 = parseInt(prompt('Escribe otro número'))
const numero3 = parseInt(prompt('Escribe un último número'))

if(numero1 >= numero2 && numero1 >= numero3){
    document.write(`<h2> El número más grande es el: ${numero1}</h2>`)
}else if(numero2 >= numero1 && numero2 >= numero3){
    document.write(`<h2> El número más grande es el: ${numero2}</h2>`)
}else if(numero3 >= numero1 && numero3 >= numero2){
    document.write(`<h2> El número más grande es el: ${numero3}</h2>`)
}