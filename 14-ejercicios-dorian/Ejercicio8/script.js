/*
8 - Dado un array de letras, solicita un numero de DNI y calcula que letra le corresponde. El numero no puede ser negativo ni tener mas de 8 digitos. La posicion de la letra es el resultado del modulo del numero introducido entre 23
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 't']

const dni = prompt('Introduce tu DNI')

if(dni.length==8 && parseInt(dni)>0){
    let letra = dni%23
    console.log(letra);
    console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`);
}
