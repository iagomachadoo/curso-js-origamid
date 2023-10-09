// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: "Nome pessoa",
    idade: 0,
    andar() {
        console.log(this.nome + " andou");
    },
};

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        return `${this.nome} andou`;
    };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

console.log(joao);
console.log(joao.andar());
console.log(maria);
console.log(maria.andar());
console.log(bruno);
console.log(bruno.andar());

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
    const listaElementos = document.querySelectorAll(seletor);

    this.elementos = listaElementos;

    this.addClass = function (classe) {
        this.elementos.forEach((element) => {
            return element.classList.add(classe);
        });
    };

    this.removeClass = function (classe) {
        this.elementos.forEach((element) => {
            return element.classList.remove(classe);
        });
    };
}

const li = new Dom("li");
