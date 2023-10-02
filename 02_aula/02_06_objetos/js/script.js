// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: 'Iago',
  sobrenome: 'Machado',
}
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.fullName = function(){
  return `${this.nome} ${this.sobrenome}`; 
}
console.log(pessoa.fullName());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
};
console.log(carro.preco);
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'Latir';
    }else{
      return 'Não latir'
    }
  },
}

console.log(cachorro.latir('homem'));
console.log(cachorro.latir("criança"));
console.log(cachorro.latir());