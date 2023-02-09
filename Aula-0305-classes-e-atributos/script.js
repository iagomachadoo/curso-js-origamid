//Classes e atributos

//Manipulando classes
const MENU = document.querySelector('.menu');
const MENU2 = document.querySelector('.menu');

const CLASSES_MENU = MENU.classList;//Retorna um DOMTokenList que é um array-like
CLASSES_MENU.add('ativo', 'azul');//Adicionando classes
CLASSES_MENU.remove('azul');//Removendo classe

//Contains verifica se uma classe existe retornando um valor booleano
if(CLASSES_MENU.contains('azul')){
  CLASSES_MENU.add('possui-azul');
}else{
  CLASSES_MENU.add('nao-possui-azul');
}

//Forma antiga de trabalhar com classes
let nameClasseMenu = MENU2.className;//Retorna uma string com todas as classes

nameClasseMenu += ' classeTeste'//Adicionando uma nova classe sem sobrescrever as já existentes

//console.log(MENU);
//console.log(CLASSES_MENU);
//console.log(CLASSES_MENU[1]);

//console.log(nameClasseMenu);



//Manipulando atributos

const MENU_ITEM = document.querySelector('.menu__item');

const ATRIBUTOS_MENU_ITEM = MENU_ITEM.attributes;//Retorna um array-like contendo todos os atributos existentes no elemento

//console.log(MENU_ITEM);

//console.log(ATRIBUTOS_MENU_ITEM);
//console.log(ATRIBUTOS_MENU_ITEM[1]);//Retornando o atributo pelo seu índice
//console.log(ATRIBUTOS_MENU_ITEM.class);//Retornando o atributo pelo seu nome
//console.log(ATRIBUTOS_MENU_ITEM['data-texto']);//Retornando o atributo pelo seu nome. Quando um atributo tiver hífem devemos passar seu nome com a notação de colchetes para acessá-lo pelo seu nome 

const IMG = document.querySelector('img');

IMG.setAttribute('class', 'imagem-animal');//Cria um atributo e adiciona um valor para ele

const POSSUI_ATRIBUTO = IMG.hasAttribute('alt');//Verifica se existe o atributo e retorna um valor booleano

IMG.setAttribute('title', 'imagem-animal');
IMG.removeAttribute('title');//Removendo um atributo

//console.log(IMG);

//console.log(IMG.getAttribute('src'));//Retornar o valor do atributo src 
//console.log(IMG.getAttribute('alt'));//Retornar o valor do atributo alt
//console.log(IMG.getAttribute('class'));//Retornar o valor do atributo alt
//console.log(POSSUI_ATRIBUTO);


//Exercícios

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('li');
itensMenu.forEach((item) => {
  item.setAttribute('class', 'ativo');
})
//console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const itensMenu2 = document.querySelectorAll('li');
itensMenu2.forEach((item, index) => {
  if(index != 0){
    item.removeAttribute('class');
  }
})
//console.log(itensMenu2);

// Verifique se as imagens possuem o atributo alt
const img = document.querySelector('img');
if(img.hasAttributes('alt')){
  //console.log(`O alt da imagem é ${img.getAttribute('alt')}`);
}

// Modifique o href do link externo no menu
const linkExtero = document.querySelector('a[href^="http"');
linkExtero.setAttribute("href", "https://github.com");

//console.log(linkExtero.attributes);
