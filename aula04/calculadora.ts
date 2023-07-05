class Calculadora {
    constructor() {}
  
    soma(a: number, b: number): number {
      return a + b;
    }
  
    subtracao(a: number, b: number): number {
      return a - b;
    }
  
    multiplicacao(a: number, b: number): number {
      return a * b;
    }
  
    divisao(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
      }
      return a / b;
    }
  }
  
  // Exemplo de uso
  const calculadora = new Calculadora();
  console.log(calculadora.soma(5, 3));
  console.log(calculadora.subtracao(5, 3));
  console.log(calculadora.multiplicacao(5, 3));
  console.log(calculadora.divisao(6, 3)); 
  