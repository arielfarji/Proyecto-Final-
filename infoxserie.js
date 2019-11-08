window.onload = function(){

var query = new URLSearchParams(location.search)

var idBuscado = query.get('id')

fetch("https://api.themoviedb.org/3/tv/"+idBuscado+"?api_key=a6f60714320c532cb6f1c6ddeef46bac")
.then(function(response) {
  return response.json();
})
.then(function(serie){
  console.log(serie);
  // var individual = informacion.results;
  // for (var i = 0; i < individual.length; i++) {
  //  document.querySelector("p.nombre").innerHTML +=
  // }

  document.querySelector('.nombre').innerHTML = serie.name
  for (var i = 0; i < serie.genres.length; i++) {
    if(i == serie.genres.length - 1){
    document.querySelector('.generosPertenecientes').innerHTML += serie.genres[i].name
  }else{
    document.querySelector('.generosPertenecientes').innerHTML += serie.genres[i].name + ', '
  }

}
})

}
