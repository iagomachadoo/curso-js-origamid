function soma(n1, n2){
    return n1 + n2;
}

console.log(soma.length);
console.log(soma.name);




// Método call() - esse método executa a função e permite passar um valor pro this
function darOi(nome){
    console.log(`Oi ${nome}, tudo bem?`);
}

darOi('Iago');
darOi.call(null, 'Brenda');

function Carro(marca, ano){
    this.marca = marca;
    this.ano = ano
};

const fiat = new Carro('Fiat Uno', 2008);
const civic = new Carro("Honda Civic", 2010);

function descricaoCarro(preco){
    console.log(this);// o this se transforma no valor passado como primeiro argumento do call()

    console.log(`${this.marca} ${this.ano} - R$ ${preco}`);
}

descricaoCarro.call(fiat, 15000);
descricaoCarro.call(civic, 35000);




// Exemplo Real
function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
    this.element.classList.add(classe);
};

const lista = new Dom("ul");
// lista.ativo("ativar");

const novoSeletor = {
    element: document.querySelector("li"),
};

Dom.prototype.ativo.call(novoSeletor, "ativo");

// Array Like e call - usamos o método call diretamente no protótipo do construtor Array para estender esse método a array's like. Outra alternativa é transformar o array like em array, com o método from() do construtor Array e depois usar os demais métodos  
const itensLista = document.querySelectorAll('li');
const contemAtivo = Array.prototype.filter.call(itensLista, item => item.classList.contains('ativo'));

const itensLista2 = document.querySelectorAll("li");
const arrayItensLista = Array.from(itensLista2);
const contemAtivo2 = arrayItensLista.filter.call(itensLista, (item) =>
    item.classList.contains("ativo")
);

console.log(itensLista);
console.log(contemAtivo);

console.log(arrayItensLista);
console.log(contemAtivo2);



// Apply
const numeros = [1, 3, 42, 87, 23, 19, 100, 67];
const maiorNumCall = Math.max.call(null, 1, 3, 42, 87, 23, 19, 100, 67);
const maiorNumCall2 = Math.max.call(null, numeros);

const maiorNumApply = Math.max.apply(null, numeros);

console.log(maiorNumCall); // 100
console.log(maiorNumCall2); // NaN 
console.log(maiorNumApply); // 100



// Bind - O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido no primeiro argumento 
const element = document.querySelector.bind(document);

console.log(element("li"));

// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.
const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
console.log(carro.acelerar(100, 20));

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda); // omitindo os demais argumentos, passando apenas o this
console.log(acelerarHonda(200, 10)); // passando os demais argumentos

// Argumentos padrão com bind
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

console.log(imc(1.80, 70)); // 21.6
console.log(imc180(70)); // 21.6 - aqui, o segunda argumento pode ser omitido, pois ja foi fixado posteriormente no bind, ao chamar a nova função, precisamos passa apenas o argumento que não é fixado
