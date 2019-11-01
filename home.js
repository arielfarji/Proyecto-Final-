window.onload = function () {

  // var columnas = document.querySelectorAll("div.uk-slider").innerHTML = function() {
  //   for (var i = 0; i < columna.length; i++) {
  //     columnas.style =
  //   }
  // };

  //modificar el click en la lupa para q aparezca lo oculto
  var lupita = document.querySelector("#lupita");
  var inputBuscador = document.querySelector(".buscadorsecundario");

  lupita.onclick = function() {
    inputBuscador.classList.toggle('inputHidden');
  }

  //hasta aca.
}
