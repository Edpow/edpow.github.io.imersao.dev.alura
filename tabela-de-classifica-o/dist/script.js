var jogadores = []

function calculaPontos(jogador){
  var pontos = jogador.vitorias*3 + jogador.empates*1 + jogador.derrotas*0
  return pontos
}

function exbirJogadoresNaTela(jogadores){
  var html = ""
  for (var i = 0; i < jogadores.length; i++){
    html += "<tr><td><img src=" + jogadores[i].image + " height=40></td>"
    html += "<td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias ++
  jogador.pontos = calculaPontos(jogador)
  exbirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exbirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exbirJogadoresNaTela(jogadores)
}

function adicionarJogador(){
  var novoJogador = jogadorFactory()
  if (!isJogadorNameEmpty(novoJogador)){
    jogadores.push(novoJogador)
    exbirJogadoresNaTela(jogadores)
  }
}

function jogadorFactory(){
  var jogador = {
  image: prompt("Insira uma link para imagem de exibição"),
  nome: prompt("Insira o nome do jogador(a)"),
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  }
  return jogador
}

function isJogadorNameEmpty(jogador){
  if (jogador.nome == ""){
    return true
  } else {
    return false
  }
}