// Constructor Functions - funções construtoras
function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 1000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 2000;

// Ao invés de passamos o valor pra cada propriedade separadamente, podemos passar como parâmetro pra função construtora
function Pessoa(parametroNome, parametroIdade, parametroCidade){
    this.nome = parametroNome;
    this.idade = parametroIdade;
    this.cidade = parametroCidade;
}

const pessoa1 = new Pessoa('Iago', 26, 'Itaocara');
const pessoa2 = new Pessoa("Diani", 43, 'Aperibé');

// Podemos criar variáveis dentro da constructor function. Essas variáveis estarão protegidas, ou seja, a nova instância o objeto não tem acesso a elas
function Produto(marca, nome, preco){
    const tx = 0.2;
    const desconto = preco - (preco * tx);
    this.marca = marca;
    this.nome = nome;
    this.preco = desconto;
}

const sabonete = new Produto('Dove', 'Dove jasmim', 4.5);
const biscoito = new Produto("Piraque", "Piraque chocolate", 3.99);