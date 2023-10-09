// Qualquer função tem a propriedade prototype
function somar(a, b) {
    return a + b;
}

console.log(somar.prototype);

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.comer = function () {
        return `${this.nome} comeu`;
    };
}

console.log(Pessoa.prototype);

const pessoa1 = new Pessoa("Iago", 26);

console.log(pessoa1.prototype); // undefined - pessoa1 é um objeto e a propriedade prototype pertence apenas a funções

// É possível adicionar novas propriedades e métodos ao objeto prototype
Pessoa.prototype.andar = function () {
    return `${this.nome} andou`;
};

console.log(Pessoa.prototype);

console.log(pessoa1.andar());

Pessoa.prototype.nadar = function () {
    return `${this.nome} nadou`;
};
console.log(pessoa1.nadar());

console.log(pessoa1.__proto__); // a propriedade __proto__ armazena as propriedades e métodos criados a partir do prototype

// Construtores nativos
// a string pais é criada a partir do construtor String() herdando assim as suas propriedades e métodos. Por um breve instante, a string pais é envolvida no objeto String
const pais = "Brasil";
const cidade = new String("Rio");

console.log(pais);
console.log(cidade);

console.log(String.prototype); // retorna a lista de propriedades e métodos existentes no construtor String

console.log(Object.getOwnPropertyNames(Pessoa));
console.log(Object.getOwnPropertyNames(Pessoa.prototype));

console.log(Object.getOwnPropertyNames(pessoa1));
console.log(Object.getOwnPropertyNames(pessoa1.__proto__));

// Entenda o que está sendo retornado
// Os métodos e propriedades acessados com o "." são referentes ao tipo de dados que é retornado antes desse "."
const Carro = {
    marca: "Marca",
    preco: 0,
    acelerar() {
        return true;
    },
};

console.log(typeof Carro); // object - tem acesso a métodos/propriedades do tipo object

console.log(typeof Carro.marca); // string - tem acesso a métodos/propriedades do tipo string

console.log(typeof Carro.preco); // number - tem acesso a métodos/propriedades do tipo number

console.log(typeof Carro.acelerar); // function - quando não executamos a função, o retorno é a própria função, então temos acesso aos métodos/propriedades do tipo de dado function

console.log(typeof Carro.acelerar()); // boolean - quando executamos a função, teremos acesso aos métodos/propriedades do tipo de dado retornado pela função, nesse caso, do tipo boolean

// Podemos verificar o nome do construtor com ".constructor.name"
console.log(Carro.marca.constructor.name);
console.log(Carro.preco.constructor.name);
console.log(Carro.acelerar.constructor.name);
