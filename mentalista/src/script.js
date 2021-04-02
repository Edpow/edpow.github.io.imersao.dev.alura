function startGame() {
  
var lowBound = parseInt(document.getElementById("lowBound").value)
//console.log(lowBound)
var upperBound = parseInt(document.getElementById("upperBound").value)
//console.log(upperBound)
  
if (isNaN(lowBound) || isNaN(upperBound)) {
   alert("Os campos não podem ficar em branco!")
  return
} else if (lowBound > upperBound){
  alert("O número inferior não pode ser maior que o número superior! Insira um intevalo válido!")
  return
} else if ( lowBound == upperBound) {
  alert("O número inferior e superior não podem ser iguais! Insira um intevalo válido!")
  return
}
  
var numeroSecreto = randomIntFromInterval(lowBound, upperBound)
//console.log(numeroSecreto)
var tentativas = 3

  while(tentativas > 0) {
    var chute = parseInt(prompt("Digite um numéro entre " + lowBound + " e " + upperBound))
    if (numeroSecreto == chute) {
      alert("Acertou")
      //break
      tentativas = 0
    } else if (chute > numeroSecreto) {
      tentativas = tentativas - 1
      alert("O numéro secreto é menor. Tentativas restantes: " + tentativas)
    } else if (chute < numeroSecreto) {
      tentativas = tentativas - 1
      alert("O numéro secreto é maior. Tentativas restantes: " + tentativas)
    }
  }

  if (chute != numeroSecreto) {
    alert("Suas tentaivas acabaram! O número secreto era " + numeroSecreto)
  }
  
}

function randomIntFromInterval(lowBound, upperBound) {
  var result = Math.floor(Math.random() * (upperBound - lowBound + 1) + lowBound)
  return result
}

//console.log(randomIntFromInterval(10, 20))