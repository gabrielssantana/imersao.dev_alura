function add_movie() {
    var movie_url = document.querySelector('#filme')
    var movie_url_value = movie_url.value
    
  if (movie_url_value.endsWith('.jpg')){
      var movies_list = document.querySelector('#listaFilmes')
      var movie_cover = '<img src=' + movie_url_value + '>'
      movies_list.innerHTML += movie_cover
  }
    
  else {
    alert('Insira uma URL de imagem!')
  }
  }