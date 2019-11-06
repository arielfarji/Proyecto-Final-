window.addEventListener("load", function (){

  var idGenero = new URLSearchParams(location.search)
  var genero = idGenero.get("idGenero");
  console.log(genero);

   fetch(" https://api.themoviedb.org/3/discover/tv?api_key=a6f60714320c532cb6f1c6ddeef46bac&sort_by=popularity.desc&page=1&with_genres=" + idGenero)
  .then(function(response) {
    return response.json();
  })
  // .then(function(respuesta) {
  //   document.querySelector("h1.title").innerText = "Resultados"
  //   var series = respuesta.results;
  //   for (var i = 0; i < series.length; i++) {
  //     if(series[i].poster_path == null) {
  //       document.querySelector("div#busqueda").innerHTML += "<div class='pelis'id='errores'><img src='img/newError.jpeg'></div>";
  //     } else {
  //       document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><img src='http://image.tmdb.org/t/p/w300" + series[i].poster_path + "'></div>";
  //     }
  //   }
  // })
})

var lupita = document.querySelector("#lupita");
var inputBuscador = document.querySelector(".buscadorsecundario");

lupita.onclick = function() {
inputBuscador.classList.toggle('inputHidden');
}
