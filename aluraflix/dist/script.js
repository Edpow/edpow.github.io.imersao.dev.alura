function adicionarFilme(){
  var campoFilmeFavorito =  document.querySelector('#filme')
  console.log(campoFilmeFavorito)
  var filmeFavorito = campoFilmeFavorito.value
  console.log(filmeFavorito)
  if(isImage(filmeFavorito)){
    listarFilmesNaTela(filmeFavorito)
  } else if (isVideo(filmeFavorito)) {
    listarVideoFromYoutubeLink(filmeFavorito)
    //listarVideoFromYoutubeEmbedLink(filmeFavorito)
  } else {
    alert("Imagem inválida!")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  console.log(listaFilmes.innerHTML)
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  console.log(listaFilmes.innerHTML)
}

//"https://www.youtube.com/embed/NcyQ9p6TyMg"

function listarVideoFromYoutubeLink(videoFilme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<iframe width=560 height=315 src=https://www.youtube.com/embed/" + getKeyOfYoutubeVideo(videoFilme) + " title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>"
  console.log(listaFilmes.innerHTML)
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  console.log(listaFilmes.innerHTML)
}

function listarVideoFromYoutubeEmbedLink(videoFilme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = videoFilme
  console.log(listaFilmes.innerHTML)
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  console.log(listaFilmes.innerHTML)
}

function isImage(imagePath){
  if(imagePath.endsWith('.jpg')){
    return true
  } else {
    return false
  }
}

function isVideo(videoPath){
  if(videoPath.includes('youtube')){
    return true
  } else {
    return false
  }
}

function getKeyOfYoutubeVideo(linkVideo){
  var keyOfVideo =  linkVideo.substring(linkVideo.indexOf('v=') + 2)
  console.log(keyOfVideo)
  return keyOfVideo
}