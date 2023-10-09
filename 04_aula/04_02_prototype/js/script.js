// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.fullName = function(){
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa('Iago', 'Machado', 26);
console.log(pessoa1.fullName());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Para acessar os métodos e propriedades de um construtor, basta usarmos .prototype
// Podemos usar também o Object.getOwnPropertyNames(tipo.constructor)

console.log(NodeList.prototype);
console.log(Object.getOwnPropertyNames(NodeList.prototype));

console.log(HTMLCollection.prototype);
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));

console.log(Document.prototype);
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li;
console.log(li.constructor.name); // HTMLLIElement
console.log(HTMLLIElement.prototype);
console.log(li.clientHeight);

li.click;
console.log(li.click.constructor.name); // Function

li.innerText;
console.log(li.innerText.constructor.name); // String
console.log(String.prototype);
console.log(li.toUpperCase);

li.value;
console.log(li.value.constructor.name); // Number

li.hidden;
console.log(li.hidden.constructor.name); // Boolean

li.offsetLeft;
console.log(li.offsetLeft.constructor.name); // Number

li.click();
console.log(li.click()); // undefined. Não tem construtor nem prototipo

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; 
console.log(typeof li.hidden.constructor.name); // string
