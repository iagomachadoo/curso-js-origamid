var pessoa = {
    nome: "André",
    idade: 28,
    profissao: "Designer",
    possuiFaculdade: true,
};

console.log(pessoa.nome); // 'André'
console.log(pessoa.possuiFaculdade); // true

// Métodos
var quadrado = {
    lados: 4,
    area: (lado)=>{
        return lado * lado;
    },
    perimetro: function(lado){
        console.log(this); // o this faz referencia ao próprio objeto, ou seja, this é o próprio objeto
        return this.lados * lado;
    },
    diagonal(lado){
        return lado * Math.sqrt(2); 
    },
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(3));
console.log(quadrado.diagonal(4)); // podemos usar a sintaxe abreviada pra criar métodos em um objeto de prop: function(){} para prop(){}, no ES6

// Alterando e adicionando propriedades de um objeto
var menu = {
    width: 800,
    height: 50,
    background: '#84e',
}

menu.background = '#000'; // DOT NOTATION SET - Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
menu.color = '#eee'; // Adicionando nova prop ao objeto 

var bg = menu.background; // DOT NOTATION GET - Acesse propriedades de um objeto utilizando o ponto .

console.log(bg);
console.log(menu.color);