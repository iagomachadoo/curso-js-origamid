//Objetos 2

//Modificando o valor de uma propriedade de um objeto
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
}

console.log(menu.backgroundColor);//#84e

menu.backgroundColor = '#000';

console.log(menu.backgroundColor);//#000 - agora o valor da propriedade backgroundColor é #000 

//Criando uma nova propriedade num objeto
menu.color = 'blue';

console.log(menu);//Dentro do objeto menu, agora temos a propriedade colo: 'blue',

menu.metadeHeight = function(){
    return this.height / 2;
};

console.log(menu.metadeHeight());

//Protótipo e herança - O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
//A propriedade hasOwnProperty é herdada do objeto Object
console.log(menu.hasOwnProperty('color'))

//Exercício
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'Iago',
    sobrenome: 'Machado',
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function(){
    return `Meu nome é ${this.nome} ${this.sobrenome}`
}

console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco);//1000
carro.preco = 3000
console.log(carro.preco);//3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    quandoLate(pessoa){
        if (pessoa === 'homem') {
            return `O ${this.raca} late ao ver um homem`

        }else{
            return `Nada`
        }
    }
}

console.log(cachorro.raca);
console.log(cachorro.cor);
console.log(cachorro.idade);
console.log(cachorro.quandoLate('homem'));