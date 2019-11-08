window.addEventListener("load", function (){

  var idGenero = new URLSearchParams(location.search)
  var genero = idGenero.get("idGenero");
  // PROBANDO var nombre = new URLSearchParams(location.search)
  // var nombre = nombre.get("nombre")
  // console.log(nombre);

  var nombreGenero = "";

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta){
    var series = respuesta.genres;
    for (var i = 0; i < series.length; i++) {
      if(series[i].id == genero){
        nombreGenero = series[i].name
      }
      document.querySelector("select.opcionesGenero").innerHTML += "<option>" + series[i].name + "</option>"
    }
  })

   fetch(" https://api.themoviedb.org/3/discover/tv?api_key=a6f60714320c532cb6f1c6ddeef46bac&sort_by=popularity.desc&page=1&with_genres=" + genero)
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    document.querySelector("h2.title").innerText = nombreGenero
    var series = respuesta.results;
    for (var i = 0; i < series.length; i++) {
      if(series[i].poster_path == null) {
        document.querySelector("div#busqueda").innerHTML += "<div class='pelis'id='errores'><img src='img/newError.jpeg'></div>";
      } else {
        document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><img src='http://image.tmdb.org/t/p/w300" + series[i].poster_path + "'></div>";
      }

    }
  })
})

var lupita = document.querySelector("#lupita");
var inputBuscador = document.querySelector(".buscadorsecundario");

lupita.onclick = function() {
inputBuscador.classList.toggle('inputHidden');
setTimeout(function() {inputBuscador.focus();}, 301)
}
