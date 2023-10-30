// forEach
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((carro, i, array) => {
    console.log(carro, i, array);
})

const arrayCarros = carros.forEach((carro, i, array) => {
    return carro, i, array
});
console.log(arrayCarros); // retorna undefined

// Quando passamos apenas um argumento e retornamos apenas uma linha em uma arraw function, podemos omitir os parênteses e as chaves
const listaLi = document.querySelectorAll('li');
listaLi.forEach(li => li.classList.add('ativo'));



// map
carros.map((carro, i, array) => {
    console.log(carro, i, array);
})

const novaArrayCarros = carros.map((carro, i, array) => {
    return carro.toUpperCase();
});

console.log(novaArrayCarros); // retorna uma nova array com os index do array original. E essa array nova não tem nenhuma relação com a array original 
console.log(carros);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosVezesDois = numeros.map(numero => numero * 2);
console.log(numerosVezesDois);
console.log(numeros);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas); // [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
console.log(nomesAulas); // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']



// reduce
const duracaoAulas = [10, 25, 30];
const reduceAulas = duracaoAulas.reduce((acumulador, itemAtual, index, array) => {
    return acumulador + itemAtual
}, 0);

console.log(reduceAulas); // retorna 65 que é a soma dos valores da array duracaoAulas

const duracaoAulas2 = [10, 25, 30];
const reduceAulas2 = duracaoAulas2.reduce(
    (acumulador, itemAtual, index, array) => {
        return acumulador + itemAtual;
    },
);

console.log(reduceAulas2); // quando não passamos o argumento valorInicial, o reduce pula a primeira iteração e o acumulador recebe o valor da primeira iteração, ou seja, nesse caso, o acumulador já começa com o valor 10 e vai haver apenas duas iterações. Mas o resultado final nesse caso é o mesmo - 65

// Retornando o maior número com reduce()
const valores = [10, 2, 45, 6, 100, 89, 75, 39];
const menorValor = valores.reduce((anterior, atual) => anterior > atual ? anterior : atual)
console.log(menorValor);

// Retornando outros valores com reduce()
const aulasCurso = [
    {
        nome: "HTML 1",
        min: 15,
    },
    {
        nome: "HTML 2",
        min: 10,
    },
    {
        nome: "CSS 1",
        min: 20,
    },
    {
        nome: "JS 1",
        min: 25,
    },
];

const listaAulas = aulasCurso.reduce((acumulador, atual, index) => {
    console.log(acumulador);
    console.log(atual);
    console.log(index);

    acumulador[index] = atual.nome;
    return acumulador;
}, {});

console.log(listaAulas);



// some()
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); // true
console.log(temUva);

function maiorQue100(numero) {
  return numero > 100;
}
const numeros2 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros2.some(maiorQue100); // true
console.log(temMaior);



// every()
const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas2.every((fruta) => {
  return fruta; // false
});
console.log(arraysCheias);

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros3.every(x => x > 3); // true
console.log(maiorQue3);



// find() e findIndex()
const frutas3 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas3.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2 - Retorna o index da expressão verdadeira
console.log(buscaUva);

const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros4.find(x => x > 45); // 88 - Retorna a própria expressão
console.log(buscaMaior45);



// filter()
const frutas4 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas4.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']
console.log(arrayLimpa);

const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior80 = numeros5.filter(x => x > 80); // [88, 101]
console.log(buscaMaior80);



// filter em objetos
const aulas2 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas2.filter((aula) => { 
  return aula.min > 15;
});
console.log(aulasMaiores);
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
