window.onload = function() {
  var datos = new URLSearchParams(location.search);
  var loBuscado = datos.get("buscadorsecundario");
  // console.log(loBuscado);

  fetch("https://api.themoviedb.org/3/search/tv?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US&query="+ loBuscado +"&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    document.querySelector("h1.title").innerText = "Resultado de ''" + loBuscado + "''";
    var series = respuesta.results;
    for (var i = 0; i < series.length; i++) {
      if(series[i].poster_path == null) {
        document.querySelector("div#busqueda").innerHTML += "<div class='pelis'id='errores'><img src='img/newError.jpeg'></div>";
      } else {
        document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><img src='http://image.tmdb.org/t/p/w300" + series[i].poster_path + "'></div>";
      }
    }
  })
  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })

  var lupita = document.querySelector("#lupita");
  var inputBuscador = document.querySelector(".buscadorsecundario");

  lupita.onclick = function() {
    inputBuscador.classList.toggle('inputHidden');
    setTimeout(function() {inputBuscador.focus();}, 301)
  }
}
