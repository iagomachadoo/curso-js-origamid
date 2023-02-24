/* Traversing e Manipulação */

//Essas são propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas - element.innerText = 'novo texto'

//outerHTML - trás todo o html do elemento incluindo ele mesmo
//innerHTML - trás todo o html dentro do elemento, ou seja, os filhos dele e todo o texto também
//innerText - trás só o texto, se o elemento tiver filhos, as tags irão vir como texto também

let titulo = document.querySelector('h1');

//console.log(titulo.outerHTML);
//console.log(titulo.innerHTML);
//console.log(titulo.innerText);

//titulo.innerHTML = '<p>Novo Título</p>';//Coloca o novo html dentro do elemento selecionado
//titulo.outerHTML = '<p>Novo Título</p>'//Substitui o elemento antigo pelo novo
//titulo.innerText = '<p>Novo Título</p>'//Substitui o texto dentro do elemento

//Traversing - como navegar pelo DOM, utilizando propriedades e métodos

const lista = document.querySelector('.animais-lista');

//console.log(lista.parentElement);//a propriedade parentElement retorna o pai do elemento
//console.log(lista.previousElementSibling);//a propriedade previousElementSibling retorna o elemento irmão acima no mesmo nível
//console.log(lista.nextElementSibling);//a propriedade nextElementSibling retorna o elemento irmão abaixo no mesmo nível
//console.log(lista.children);//a propriedade children retorna um htmlCollection contendo os filhos do elemento selecionado
//console.log(lista.children[--lista.children.length]);//pegando o último elemento da coleção
//console.log(lista.querySelector('li:last-child'));//pegando o último elemento com um seletor css

//Manipulando elementos
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const tituloContato = contato.querySelector('.titulo')

//animais.appendChild(tituloContato);//O método appendChild inseri um elemento ao final do elemento pai

//contato.insertBefore(animais, tituloContato)//O método insertBefore() inseri um elemento dentro de um elemento pai e antes de um elemento filho especificado desse pai. Portanto, o segundo parâmetro desse método deve ser um filho do elemento pai especificado

//contato.removeChild(tituloContato);//O método removeChild() remove um filho especificado dentro de um elemento pai especificado

//contato.replaceChild(animais, tituloContato)//O método replaceChild() substitui um elemento filho especificado por outro elemento. Assim, o segundo parâmetro desse método deve ser um filho do elemento pai especificado

/* Criando elementos */

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo título';
novoH1.classList.add('titulo');

const tituloAnimais = animais.querySelector('.titulo');
//animais.replaceChild(novoH1, tituloAnimais)

/* Clonar elementos */
//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const h1Clonado = h1.cloneNode(true);

//faq.appendChild(h1Clonado)

//Exercícios

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');
const copyTexto = copy.querySelector('p');

copy.insertBefore(cloneMenu, copyTexto)

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista dt:first-child');

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const faq2 = document.querySelector('.faq');
const animais2 = document.querySelector('.animais');

faq2.outerHTML = animais2.outerHTML;