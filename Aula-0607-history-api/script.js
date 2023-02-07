//History API

//console.log(window.history);

//Modificando o url através de um script com o método pushState()
//o url da página agora será o url passado como terceiro argumento

//window.history.pushState(null, null, 'oi.html')

//Evento popstate

//window.history.pushState(null, null, 'oi.html');

/* window.addEventListener('popstate', () => {
  console.log('teste');
}); */


//Fetch e History

const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  const url = event.target.href;
  fetchPage(url);
  window.history.pushState(null, null, url)
};

async function fetchPage(url){
  document.querySelector('.conteudo').innerHTML = 'Carregando';//Carregamento entre as requisições
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);

  //console.log(pageText);
}

function replaceContent(newText){
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText

  const oldContent = document.querySelector('.conteudo');
  const newContent = newHtml.querySelector('.conteudo');

  oldContent.innerHTML = newContent.innerHTML;

  //Pegando o title da página
  document.title = newHtml.querySelector('title').innerText;

  //console.log(newHtml);
}

window.addEventListener('popstate', () => {
  const urlPagina = (window.location.href);
  fetchPage(urlPagina);

  //console.log(window.location.href);
})

links.forEach((link) => {
  link.addEventListener('click', handleClick)
});