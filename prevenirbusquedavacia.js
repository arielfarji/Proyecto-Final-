window.addEventListener("load", function () {


  document.querySelector(".form-avanzado").onsubmit = function (event) {
    event.preventDefault();
    var eGenero = document.querySelector(".opcionesGenero");
    var generoElegido = eGenero.options[eGenero.selectedIndex].value;

    var excluir = document.querySelector(".excluir");
    var generoExcluido = excluir.options[excluir.selectedIndex].value;

    var ordenar = document.querySelector(".orden");
    var orden = ordenar.options[ordenar.selectedIndex].value;

    var year = document.querySelector(".year").value;

    event.preventDefault();
    console.log(generoElegido);


    if (generoElegido == "" && generoExcluido == "" && orden == "" && year == "" ) {
      event.preventDefault();
      alert('Seleccione al menos un campo')
    }

    if (generoElegido != "" && generoExcluido != "") {
      event.preventDefault();
      alert("tesdt")
      // Mostrar otro error
    }

  }
})
