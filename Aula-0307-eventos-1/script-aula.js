//Eventos


document.querySelector('img').addEventListener('click', function(e){
  //console.log(`Cliquei em ${e.target.localName}`);
});

document.querySelector('h1').addEventListener('click', (e)=>{
  //console.log(`Cliquei em ${e.target.localName}`);
});

document.querySelector('ul').addEventListener('click', callback);
function callback(e) {
  //console.log(`Cliquei em ${e.target.localName}`);
  //console.log(`Cliquei em ${this.localName}`);

  //Propriedades do Event
  const currentTarget = e.currentTarget;//é o elemento que foi adicionado o evento - o this é igual ao currentTarget
  const target = e.target;//onde o clique ocorreu
  const type = e.type;//tipo do evento
  const path = e.path;
  //console.log(currentTarget,target,type,path);
}

//preventDefault()
document.querySelector('a[href^="http"]').addEventListener('click', pegarLinkExterno);
function pegarLinkExterno(e){
  e.preventDefault();
  //console.log('clicou');
}

//foreach e eventos
function getSrc(e){
  //console.log(this.getAttribute('src'));
}

document.querySelectorAll('img').forEach(img => img.addEventListener('click', getSrc));

//Exercício

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"');

function addClass(e){
  //prevenindo comportamento padrão
  e.preventDefault();

  //Removendo a classe ativo dos links
  linksInternos.forEach(item => {
    item.classList.remove('ativo')
  });

  //Adicionando a classe ativo no link clicado
  e.currentTarget.classList.add('ativo');
};

linksInternos.forEach(link => link.addEventListener('click', addClass))

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll('body *');

function pegarElementoClicado(e){
  console.log(e.currentTarget);
}

body.forEach(item => item.addEventListener('click', pegarElementoClicado));

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const body2 = document.body;

function pegarElementoClicado(e){
  e.target.remove();
}

body2.addEventListener('click', pegarElementoClicado);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.  
function pegarTexto(){
  //documentElement é o html
  return document.documentElement.classList.toggle('texto-big');
}

function aumentarTexto(e){
  if(e.key === 't'){
    pegarTexto();
  }
};

window.addEventListener('keydown', aumentarTexto);