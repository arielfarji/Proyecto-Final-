window.addEventListener("load", function (){

  var idGenero = new URLSearchParams(location.search)
  var genero = idGenero.get("idGenero");
  //console.log(genero);

   fetch("https://api.themoviedb.org/3/genre/tv/list" + idGenero + "?language=en-US&api_key=a6f60714320c532cb6f1c6ddeef46bac")
  .then(function(response) {
    return response.json();
  })

})

var lupita = document.querySelector("#lupita");
var inputBuscador = document.querySelector(".buscadorsecundario");

lupita.onclick = function() {
inputBuscador.classList.toggle('inputHidden');
}


// Esto debiera ir despues del fetch
// .then(function(respuesta) {
//   document.querySelector("h1.title").innerText = "Resultado de "" + series[i].name; + """
//   var series = respuesta.results;
//   for (var i = 0; i < series.length; i++) {
//     if(series[i].poster_path == null) {
//       document.querySelector("div#busqueda").innerHTML += "<div class='pelis'id='errores'><img src='img/newError.jpeg'></div>";
//     } else {
//       document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><img src='http://image.tmdb.org/t/p/w300" + series[i].poster_path + "'></div>";
//     }
//   }
// })
