window.onload = function() {

  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesFavoritas");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritas = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritas = JSON.parse(recuperoStorage);
  }

  var datos = new URLSearchParams(location.search);
  var idGif = datos.get("idGif"); //CAMBIAR ESTO

  if (seriesFavoritas.includes(idGif)) { //CAMBIAR ESTO
    document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
  }



  fetch("https://api.giphy.com/v1/gifs/" + idGif + "?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU") //CAMBIAR ESTO
    .then(function(response) {
      return response.json();
    })
    .then(function(gif) {
      document.querySelector("h1").innerHTML = gif.data.title; //CAMBIAR ESTO
      document.querySelector("img").src = gif.data.images.original.url; //CAMBIAR ESTO
    })

    document.querySelector("button").onclick = function() {


      //Paso 2: Modificar la informacion
      // Si el gif ya era favorito
      if (seriesFavoritas.includes(idGif)) { //CAMBIAR ESTO
        // Lo quito
        var index = seriesFavoritas.indexOf(idGif); //CAMBIAR ESTO
        seriesFavoritas.splice(index, 1);
        document.querySelector("button").innerHTML = "AGREGAR FAVORITO";
      } else {
        //Lo agrego
        seriesFavoritas.push(idGif); //CAMBIAR ESTO
        document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
      }


      //Paso 3: Escribir en storage
      var infoParaStorage = JSON.stringify(seriesFavoritas);
      localStorage.setItem("seriesFavoritas", infoParaStorage);
      console.log(localStorage);
    }
}
