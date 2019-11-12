window.onload = function(){

var query = new URLSearchParams(location.search)

var idBuscado = query.get('id')

fetch("https://api.themoviedb.org/3/tv/"+idBuscado+"?api_key=a6f60714320c532cb6f1c6ddeef46bac")
.then(function(response) {
  return response.json();
})
.then(function(serie){

//nombre de la serie
  document.querySelector('.nombre').innerHTML = serie.name
  //fecha de la serie
document.querySelector('.fechaDeOrigen').innerHTML = serie.first_air_name
  //los generos [esta diferente xq venia en un Array]
  for (var i = 0; i < serie.genres.length; i++) {
//si ya es igual a la cantidad de generos no poner comas
    if(i == serie.genres.length - 1){
    document.querySelector('.generosPertenecientes').innerHTML += serie.genres[i].name
  }
//agregarle una coma dps de cada genero
  else{
    document.querySelector('.generosPertenecientes').innerHTML += serie.genres[i].name + ', '
  }
}
//lenguaje de la serie
document.querySelector('.lenguaje').innerHTML = serie.original_language
//sinopsis
document.querySelector('.sinopsis').innerHTML = serie.overview
})

fetch ("https://api.themoviedb.org/3/tv/"+idBuscado+"/images?api_key=a6f60714320c532cb6f1c6ddeef46bac")
.then(function(response) {
  return response.json();
})
.then(function(fotoDeLaSerie){
//foto del poster
for (var i = 0; i < fotoDeLaSerie.length; i++) {
  document.querySelector("div.poster").innerHTML += "<img src='http://image.tmdb.org/t/p/w200" + fotoDeLaSerie[i].poster.file_path + "'>"
}
})




var lupita = document.querySelector("#lupita");
var inputBuscador = document.querySelector(".buscadorsecundario");

lupita.onclick = function() {
  inputBuscador.classList.toggle('inputHidden');
  setTimeout(function() {inputBuscador.focus();}, 301)
}

//busqueda sea valida y con mas de 3 caracteres y desaparezca dps de 3s
document.querySelector("form#busqueda").onsubmit = function (event) {

  if(document.querySelector("input.buscadorsecundario").value.length < 3) {
event.preventDefault();
  document.querySelector('.error').innerHTML += `<div class="uk-alert-danger notificacion" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Al menos 3 letras.</p>
</div>`
setTimeout(function(){
  document.querySelector('.notificacion').style.display = 'none'
}, 3000)
  }
  }

}
