//Dimensões e distâncias 1

const listaAnimais = document.querySelector('.animais-lista');
const primeiroH2 = document.querySelector('h2');

const alturaLista = listaAnimais.clientHeight
const alturaListaComScroll = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop

const h2Left = primeiroH2.offsetLeft

const h2Rect = primeiroH2.getBoundingClientRect()

//console.log(listaAnimais);

//console.log(alturaLista);//height + padding
//console.log(alturaListaComScroll);//height total, mesmo dentro de scroll
//console.log(animaisTop);//distância entre o elemento e o topo da página
//console.log(h2Left);//distância entre o elemento e o lado esquerdo da página
//console.log(h2Rect.top);//Retorna um objeto com várias informações do posicionamento do elemento na página

//Medidas em relação ao window

//innerWidth retorna a largura do documento
//window.outerWidth retorna a largura da janela
//window.pageYOffset retorna a distância total de scroll vertical 

/* console.log(
  window.innerWidth,
  window.outerWidth,
  window.pageYOffset
); */

if(h2Rect.top < 0){
  //console.log("Passou do topo");
}

//Verificando a largura da window com o método matchMedia

const small = window.matchMedia('(max-width: 600px)').matches

//console.log(small);

if(small){
  //console.log("Tela menos que 600px de largura");
}

//Exercícios

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img').getBoundingClientRect().top;
console.log(primeiraImg);

// Retorne a soma da largura de todas as imagens
//A propriedade onload executa um callback somente após o carregamento completo de todos os elementos da página
function somaImgs(){
  const larguraImgs = document.querySelectorAll('img');
  let somaLarguraImg = 0
  larguraImgs.forEach((img, i) => {
    const larguraImg = img.getBoundingClientRect().width
    somaLarguraImg += larguraImg
  })
  console.log(somaLarguraImg);
}
window.onload = function(){
  somaImgs()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
console.log(links);
links.forEach((link)=>{
  const linkWidth = link.getBoundingClientRect().width
  const linkHeight = link.getBoundingClientRect().height
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(`O link ${link} possui acessibilidade`);
  }else{
    console.log(`O link ${link} não possui acessibilidade`);
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const larguraTela = window.matchMedia('(max-width: 720px)').matches;

if(larguraTela){
  document.querySelector('.menu').classList.add('menu-mobile');
}