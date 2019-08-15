//4) Crie uma função que receba 3 números e retorne o menor valor

var number1 = parseInt(prompt("Insira o primeiro valor"));
var number2 = parseInt(prompt("Insira o segundo valor"));
var number3 = parseInt(prompt("Insira o terceiro valor"));

function smmaler (number1,number2,number3) {
  return Math.min(number1,number2,number3);
}
var result = smmaler(number1,number2,number3);
document.body.append(result);
