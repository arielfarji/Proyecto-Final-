window.onload = function () {

  fetch("https://api.themoviedb.org/3/tv/popular?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta){
    // console.log( respuesta.results[1].poster_path );
    var series = respuesta.results;
    for (var i = 0; i < series.length; i++) {
      document.querySelector("div.populares").innerHTML += "<div><img src='http://image.tmdb.org/t/p/w200" + series[i].poster_path + "'></div>"
    }

    setTimeout(function() {
      $('.populares').slick({
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true
      });
    }, 200)



  }
)


  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta){
    // console.log( respuesta.results[1].poster_path );
    var series = respuesta.results;
    for (var i = 0; i < series.length; i++) {
      document.querySelector("div.mayor-puntaje").innerHTML += "<div><img src='http://image.tmdb.org/t/p/w200" + series[i].poster_path + "'></div>"
    }
    /**donde dice src lo busco aparte y para poster es siempr el mismo*/
    /*si quiero poner el titulo de la peli abajo de la imagen, lo que tengo que hacer es una vez que cierro lo de img abro uno nuevo para un p y en ves de poner poster path pongo title porque respuesta.result lo tiene todo junto en series*/
    setTimeout(function() {
      $('.mayor-puntaje').slick({
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true
      });



    }, 200)

  }
)



//modificar el click en la lupa para q aparezca lo oculto
var lupita = document.querySelector("#lupita");
var inputBuscador = document.querySelector(".buscadorsecundario");

lupita.onclick = function() {
  inputBuscador.classList.toggle('inputHidden');
  setTimeout(function() {inputBuscador.focus();}, 301)

}
//hasta aca.
}







// var columnas = document.querySelectorAll("div.uk-slider").innerHTML = function() {
//   for (var i = 0; i < columna.length; i++) {
//     columnas.style =
//   }
// };

//modificar el click en la lupa
// .onClick = function buscadorsecundario() {
//   var search = document.querySelector("button.fa fas-search");
//   if (search.style.display === "none") {
//     search.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
//hasta aca.
