function verificaBissexto(ano){
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
        return "É bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificaBissexto(2023));