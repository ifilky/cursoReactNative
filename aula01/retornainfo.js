function retornaConjunto(numero){
    if(numero < 0){
        return "Negativo";
    } else if(numero > 0){
        return "Positivo";
    } else {
        return "Zero";
    }
}

console.log(retornaConjunto(-1));