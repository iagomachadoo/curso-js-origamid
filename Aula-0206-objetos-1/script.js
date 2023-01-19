//Objetos 1

//Sintaxe de um objeto
//A propriedade sempre vai seguir o padrão chave: valor,
//Cada propriedade dessa é considerada uma variável
var pessoa = {
    nome: 'Iago',
    idade: 26,
    profissao: 'Dev',
    possuiFaculdade: true,
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);//undefined, propriedade não definida

//Método de um objeto
//Um método de um objeto nada mais é do que uma propriedade que tem como valor uma função
//As funções criadas como valor das propriedades são anónimas, mas recebe o nome da propriedade quando for ser invocada
//A palavra reservada this usada no método perimetro serve para fazer referência a algo, contudo, esse algo depende do contexto em que this foi chamado. No caso de usarmos o this em uma função que é um método de um objeto, seu valor toma o valor do objeto pertencente ao método chamado. Como no exemplo abaixo, o this toma o valor do objeto quadrado
var quadrado = {
    lados: 4,
    area: (lado) => {
        return lado * lado;
    },
    perimetro: function(lado){
        console.log(this);//this toma o valor do objeto quadrado
        return this.lados * lado
    },
    altura(lado){
        return lado;
    },//forma abreviada de criar um método
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.altura(5));