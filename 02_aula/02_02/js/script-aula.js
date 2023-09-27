// Verificando o tipo de uma variável
var nome = "Ted";
var idade = 6;
var time;

console.log(typeof nome); //string
console.log(typeof idade); // number
console.log(typeof time); // undefined

// Concatenando strings
var sobrenome = 'Noleto';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

var qtd = 5;
var frase = 'O ted tem' + ' ' + qtd + ' ' + 'anos';

console.log(typeof qtd);

console.log(typeof frase); // quando um number é concatenado com uma string, ele se torna uma string, o javascript internamente força essa conversão

console.log(frase);

// Tipos de aspas em strings
var aspaSimples = 'JavaScript é "super" fácil';
var aspaDupla = "JavaScript é 'super' fácil";
var backSlash = "JavaScript é \"super\" fácil";
var templateString = `JavaScript é "super" fácil`;
var templateStringComVariavel = `O ted tem ${qtd} anos`;
// var invalido = "JavaScript é "super" fácil"; // aspas simples dentro de simple ou dupla dentro de dupla são um formato inválido, a não ser que usemos as barras invertidas pra escapar o caracter

console.log(aspaSimples);
console.log(aspaDupla);
console.log(backSlash);
console.log(templateString);
// console.log(invalido);
console.log(templateStringComVariavel);