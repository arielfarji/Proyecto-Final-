window.onload = function () {
//sliders columnas
  $('.populares').slick({
     vertical: true,
     slidesToShow: 2,
     slidesToScroll: 2
   });
   $('.al-aire').slick({
     vertical: true,
     slidesToShow: 2,
     slidesToScroll: 2
   });
   $('.mayor-puntaje').slick({
     vertical: true,
     slidesToShow: 2,
     slidesToScroll: 2
   });

  $('.populares').slick({
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });
  $('.al-aire').slick({
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });
  $('.mayor-puntaje').slick({
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

  //modificar el click en la lupa para q aparezca lo oculto
  var lupita = document.querySelector("#lupita");
  var inputBuscador = document.querySelector(".buscadorsecundario");

  lupita.onclick = function() {
    inputBuscador.classList.toggle('inputHidden');
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
