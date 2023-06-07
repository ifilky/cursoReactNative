//Escreva um programa que verifique se um número é positivo e ímpar ao mesmo tempo.
function imparPositivo(numero){
    if(numero > 0 && numero % 2 !== 0){
        return true;
    } else {
        return false;
    }
}

console.log(imparPositivo(-1));