// Decalrando variáveis
var nome = 'Pistola';
var idade = 5;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

// Declarando uma série de variáveis sem a palavra reservada, pra isso é necessário o usu de vírgula 
var sobrenome = 'Noleto',
    cidade = 'São Paulo',
    bairro = 'São Miguel';

console.log(sobrenome, cidade, bairro);

// Variável sem valor definido retorna undefined
var semDefinir;
console.log(semDefinir);

// Hosting
console.log(comida); //undefined
var comida = 'pizza';
console.log(comida); //pizza

// Redeclarando e reatribuindo variáveis
var time = 'flamengo';
time = 'vasco'; // reatribuindo valor
var time = 'gremio' //redeclarando variável

console.log(time);

let fruta = 'uva';
fruta = 'mamão'; // reatribuindo valor
// let fruta = 'maracujá'; //let não aceita ser redeclarada

console.log(fruta);

const pais = 'Brasil';
// pais = 'Argentina'; // const não aceita ter seu valor reatribuida
// const pais = 'Chile'; // const não aceita ser redeclarada

console.log(pais);