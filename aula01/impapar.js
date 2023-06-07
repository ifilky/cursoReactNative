function parOuImpar(numero){
    if(numero % 2 !== 0){
        return "é ímpar";
    } else{
        return "é par";
    }
}

console.log(parOuImpar(2));