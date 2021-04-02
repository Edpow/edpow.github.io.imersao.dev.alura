var primeiroValor = parseInt(prompt('Digite o primeiro valor :'))
var segundoValor = parseInt(prompt('Digite o segundo valor :'))
var operacao = parseInt(prompt('Selecione uma opção:\n1 - Divisão\n2 - Multiplição\n3 - Soma\n4 - Subtração'))
var resultadoTexto
var resultado

switch (operacao) {
  case 1:
      resultado = primeiroValor / segundoValor;
      resultadoTexto = primeiroValor + " / " + segundoValor + " = " + resultado;
      escreveResultado(resultadoTexto);
      break;
  case 2:
      resultado = primeiroValor * segundoValor;
      resultadoTexto = primeiroValor + " * " + segundoValor + " = " + resultado;
      escreveResultado(resultadoTexto);
      break;
  case 3:
      resultado = primeiroValor + segundoValor;
      resultadoTexto = primeiroValor + " + " + segundoValor + " = " + resultado;
      escreveResultado(resultadoTexto);
      break;
  case 4:
      resultado = primeiroValor - segundoValor;
      resultadoTexto = primeiroValor + " - " + segundoValor + " = " + resultado;
      escreveResultado(resultadoTexto);
      break;
  default:
      escreveResultado("Opção inválida!");
}

function escreveResultado(resultado){
 document.write("<h2>" + resultado + "</h2>")//Substitui direto a tag <h2> no HTML. Pesquisar!
}



