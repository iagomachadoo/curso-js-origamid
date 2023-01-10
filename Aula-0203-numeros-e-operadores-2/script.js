//Operadores aritméticos unários

var x = 5;
console.log(x++, x);

var x = 10;
console.log(x, ++x);

var ano = '2023'
console.log(ano, +ano, -ano);

var a = '28',
    b = 5,
    c = a + b,
    d = +a + b;
console.log(c, d);

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var nan1 = "10 ovos" - 5,
    nan2 = "ovos 10" * 5;
console.log(nan1, nan2);

// Somar a string '200' com o número 50 e retornar 250
console.log(+'200' + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var y = 5;
console.log(++y);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso; // NaN (Not a Number)
console.log(peso);