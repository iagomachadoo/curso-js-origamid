var idade = 26;

console.log(idade);

// Operadores

var op1 = 5;
var op2 = 6

var adicao = op1 + op2;
var subtracao = op1 - op2;
var multiplicacao = op1 * op2;
var divisao = op1 / op2;
var exponenciacao = op1 ** op2;
var restoDivisao = op1 % op2;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(exponenciacao);
console.log(restoDivisao);

// Operações com string
var soma = '100' + 50;
var sub = '100' - 50;
var mult = '100' * 50;
var div = 'R$ 100' / 50;
var div2 = '100 reais' / 50;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div); // NaN - not a number
console.log(div2); // NaN - not a number
console.log(isNaN(div)); // true
console.log(isNaN(soma)); // false

// Operadores unários
var num1 = 1
var num2 = 2
var num3 = 3
var num4 = 4

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(++num1); // 2
console.log(--num2); // 1

num3++;
num4--;
console.log(num3++); // 4
console.log(num4--); // 3

// Convertendo string e número com operador unário
var string = '28';
var outraString = 'Dia 30';

console.log(+string); // 28
console.log(-string); // -28
console.log(+outraString); // NaN
console.log(-outraString); // NaN