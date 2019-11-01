window.addEventListener("load", function () {

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta){
    // console.log( respuesta.results[1].poster_path );
    var series = respuesta.genres;
    for (var i = 0; i < series.length; i++) {
      document.querySelector("ul.lista-generos").innerHTML += "<li><a href=>" + series[i].name + "</a></li>"
    }
  })
})
