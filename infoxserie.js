window.onload = function(){

var query = new URLSearchParams(location.search)

var idBuscado = query.get('id')

var recuperoStorage = localStorage.getItem("seriesFavoritas");

// Si todavía no tenía gifs favoritos
if (recuperoStorage == null) {
  // Creo una lista vacia
  seriesFavoritas = [];
} else {
  // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
  seriesFavoritas = JSON.parse(recuperoStorage);
}

// Lo que va a pasar con el boton si el usuario YA TENIA la serie como fav
if (seriesFavoritas.includes(idBuscado)) { //CAMBIAR ESTO
  document.querySelector("a.hearts svg path").style.fill = "yellow"; //como la imagen adentro tiene un svg y adentro un path (donde se le pasa el estilo)
}

document.querySelector("a.hearts").onclick = function(e) { //evento donde hago click

  e.preventDefault()
  //Paso 2: Modificar la informacion
  // Si el gif ya era favorito
  if (seriesFavoritas.includes(idBuscado)) { //CAMBIAR ESTO
    // Lo quito
    var index = seriesFavoritas.indexOf(idBuscado); //CAMBIAR ESTO
    seriesFavoritas.splice(index, 1);
    document.querySelector("a.hearts svg path").style.fill = "rgba(255,255,255,0)";
  } else {
    //Lo agrego
    seriesFavoritas.push(idBuscado); //CAMBIAR ESTO
    document.querySelector("a.hearts svg path").style.fill = "yellow";
  }


  //Paso 3: Escribir en storage
  var infoParaStorage = JSON.stringify(seriesFavoritas);
  localStorage.setItem("seriesFavoritas", infoParaStorage);

}

fetch("https://api.themoviedb.org/3/tv/"+idBuscado+"?api_key=a6f60714320c532cb6f1c6ddeef46bac")
.then(function(response) {
  return response.json();
})
.then(function(serie){
  console.log(serie);
//nombre de la serie
  document.querySelector('.nombre').innerHTML = serie.name
  //fecha de la serie
document.querySelector('.fechaDeOrigen').innerHTML = "<strong>Fecha: </strong>" + serie.first_air_date
  //los generos [esta diferente xq venia en un Array]
document.querySelector('.generosPertenecientes').innerHTML += "<strong>Genero: </strong>"
  for (var i = 0; i < serie.genres.length; i++) {
//si ya es igual a la cantidad de generos no poner comas
    if(i == serie.genres.length - 1){
    document.querySelector('.generosPertenecientes').innerHTML += "<a href=seriesxgenero.html?idGenero="+serie.genres[i].id+">" + serie.genres[i].name
  }
//agregarle una coma dps de cada genero
  else{
    document.querySelector('.generosPertenecientes').innerHTML += "<a href=seriesxgenero.html?idGenero="+serie.genres[i].id+">" + serie.genres[i].name + ', ' + "</a>"
  }
}
//lenguaje de la serie
document.querySelector('.lenguaje').innerHTML = "<strong>Lenguaje:</strong> " + serie.original_language
//sinopsis
document.querySelector('.sinopsis').innerHTML = "<strong>Sinopsis: </strong>" + serie.overview


document.querySelector('.poster img').src = 'http://image.tmdb.org/t/p/w300' + serie.poster_path
})


var fotos = "";
//recomendaciones de la series
fetch("https://api.themoviedb.org/3/tv/"
+idBuscado+"/recommendations?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US&page=1")
.then(function(response) {
  return response.json();
})
.then(function(recomen) {
var imagenes = recomen.results;
var divRecomendados = document.querySelector(".recomendados")
var boton = document.querySelector('.lasRecomendaciones');

  for (var i = 0; i < imagenes.length; i++) {
    // console.log(document.querySelector(".recomendados"));
    if(imagenes[i].poster_path != null) {
      divRecomendados.innerHTML += "<li><img src='http://image.tmdb.org/t/p/w300" + imagenes[i].poster_path + "'></li>"
    } else {
      divRecomendados.innerHTML += "<li><img src='img/newError.jpeg'></li>";
    }
  }
boton.onclick =  function() {
    document.querySelector("div.losRecomendados").classList.toggle("ocultar");
  }
}
)
.catch(function(error) {
  console.log(error);
  alert("Error, perdon, vuelva mas tarde")
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
