/* Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

const numero1 = parseInt(prompt('Ingresa un número'))

if(numero1%2 == 0){
    alert(`El número: ${numero1} es divisible por 2`)
}else{
    alert(`El número: ${numero1} no es divisible por 2`)
}