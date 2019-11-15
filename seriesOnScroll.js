window.addEventListener('load', function() {
  var numerodepagina = 1 //aranca desde la pagina 1

  function isScrolledIntoView(el) { //todo este parrafo se copia y te marca donde esta el top y el bottom de la pagina para saber cuando arranca el scroller.
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  function debounce(unaFuncion, tiempo) {  //esta parte tambien se copia ¿que hacia?
    let timeoutId;
    return function() {
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      const context = this;
      const args = arguments;
      timeoutId = setTimeout(function() {
        unaFuncion.apply(context, args);
      }, tiempo);
    }
  }

  var elTrigger = document.querySelector('#trigger'); //esto disparaba algo ¿que?
  console.log(isScrolledIntoView(elTrigger));

  function detectarScroll() {
    console.log("Hay scroll bro!"); //esto salca cuando bajas al final de la pagina y funciona el scroll.
    if (numerodepagina < 500) { //va a funcionar siempre que la pagina sea menor a 500.
      var contenedorseries = document.querySelector("#trigger") //si la pagina es mejor a 500 genil! por lo tanto "dispara" el trigger.
      if (isScrolledIntoView(contenedorseries)) { //esto nose
        console.log("scroller");
        numerodepagina++ //esto es numero de pagina mas 1. esto es SI scroll la pagina hasta el final le se le suma la siguiente pagina?
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&page="+numerodepagina)
        .then(function(response) {
          return response.json(); //despues de usar el ulr y le sumas la siguiente pagina y THEN se tranforma en json.
        })
        .then(function (respuesta) {
          console.log(respuesta);
          for (var i = 0; i < respuesta.results.length; i++) {
            if(respuesta.results[i].poster_path != null) { //Esto es si la imagen del poster da null --> quiero que pase lo siguiente:
              document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><img src='http://image.tmdb.org/t/p/w300" + respuesta.results[i].poster_path + "'></div>"
            } else { //sino: ¿pero nose que es lo de arriba ni lo de abajo.
              document.querySelector("div#busqueda").innerHTML += "<div class='pelis'id='errores'><img src='img/newError.jpeg'></div>";
            }
          }
        })
      }
    }
  }
  let debDetectarScroll = debounce(detectarScroll, 300); //esto es que esperas 3 segundo para que aparezca la segunda pagina.
  window.addEventListener('scroll', function() {
    debDetectarScroll();
  })
});
