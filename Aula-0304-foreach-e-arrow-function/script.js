//ForEach e Arrow Functions

//forEach

//O método forEach() executa uma dada função em cada elemento de um array.

const imgs = document.querySelectorAll('img');

//O primeiro parâmetro é o elemento atual que está sendo processado
imgs.forEach(function(item){
  //console.log(item);
});

//O segundo parâmetro é a posição atual do elemento atual que está sendo processado
imgs.forEach(function(item, index){
  //console.log(index);
});

//O terceiro parâmetro é a própria lista que está sendo processada
imgs.forEach(function(item, index, array){
  //console.log(array);
});

//Arrow Function
//Sintaxe resumida em relação a uma função 

imgs.forEach((item) => {
  //console.log(item);
});

//Sem passar nenhum argumento
//Quando não passamos parâmetros, os parênteses sempre devem ser passados

imgs.forEach(() => {
  //console.log('olá, mundo!');
});

//Utilizando apenas um argumento
//Quando passamos apenas um argumento, os parênteses não são necessários

imgs.forEach(item => {
  //console.log(item);
});

//Utilizando mais de um argumento
//Quando passamos mais de um argumento, os parênteses são necessários

imgs.forEach((item, index) => {
  //console.log(item, index);
});

//Quando a função retorna apenas uma linha de código
//Nesses casos, podemos omitir as chaves que criam o corpo da função
//Não é permitido fechar a linha do retorno da função com ;

//imgs.forEach(item => console.log(item));

//Exercícios

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(item => console.log(item));

// Mostre o texto dos parágrafos no console
paragrafos.forEach(item => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imagens = document.querySelectorAll('img');

imagens.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imagens.forEach(() => {
  console.log(i++);
});

imagens.forEach(() => i++);