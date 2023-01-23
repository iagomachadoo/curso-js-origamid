//'use strict'

//Escopo

//Escopo de função
//Uma variável criada dentro de uma função não pode ser acessada fora da mesma
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

//Variável com escopo global
//Se criarmos uma variável sem palavra chave, ela é inserida no escopo global e pode ser acessada por qualquer parte do código. Isso é um erro, e o uso do -- use strict -- impede esse erro
function mostrarCarro2() {
  carro2 = 'Fusca';
  console.log(carro2);
}

mostrarCarro2(); // Fusca no console
console.log(carro2); // Agora pode ser acessada

//Exercícios

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(marca, portas);
}

//console.log(var, marca, portas);//porque não estamos referenciado a variável cor da forma correta, devemos usar seu nome e não a palavra reservada var e as variáveis marca e portas estão dentro do escopo de bloco, portanto, não podem ser acessadas fora dele 

console.log(cor);

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  //const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

/* for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
} */

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
