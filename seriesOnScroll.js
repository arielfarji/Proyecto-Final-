window.addEventListener('load', function() {
  var numerodepagina = 1

  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  function debounce(unaFuncion, tiempo) {
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

  var elTrigger = document.querySelector('#trigger');
  console.log(isScrolledIntoView(elTrigger));

  function detectarScroll() {
    console.log("Hay scroll bro!");
    if (numerodepagina < 500) {
      var contenedorseries = document.querySelector("#trigger")
      if (isScrolledIntoView(contenedorseries)) {
        console.log("scroller");
        numerodepagina++
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=a6f60714320c532cb6f1c6ddeef46bac&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&page="+numerodepagina)
        .then(function(response) {
          return response.json();
        })
        .then(function (respuesta) {
          console.log(respuesta);
          for (var i = 0; i < respuesta.results.length; i++) {
            if(respuesta.results[i].poster_path != null) {
              document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><img src='http://image.tmdb.org/t/p/w300" + respuesta.results[i].poster_path + "'></div>"
            } else {
              document.querySelector("div#busqueda").innerHTML += "<div class='pelis'id='errores'><img src='img/newError.jpeg'></div>";
            }
          }
        })
      }
    }
  }
  let debDetectarScroll = debounce(detectarScroll, 300);
  window.addEventListener('scroll', function() {
    debDetectarScroll();
  })
});
