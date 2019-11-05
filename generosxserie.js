window.addEventListener("load", function () {
var idGenero = new URLSearchParams(location.search).get("idGenero")
//var genero = idGenero.get("");ESTA VAR ME TIENE QUE DAR LA URL DE LAS SERIES


  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta){
    // console.log( respuesta.results[1].poster_path );
    var series = respuesta.genres;
    for (var i = 0; i < series.length; i++) {
      document.querySelector("ul.lista-generos").innerHTML += "<li><a href=generosxserie.html?idGenero=" + series[i].id + ">" + series[i].name + "</a></li>"
    }
  })

})
