// Boolean e Condicionais 2

//Operador lógico &&

//Esse operador retornar o valor da comparação e não um valor lógico, mas se a comparação for entre valores booleanos, então o retornar será um valor desse tipo

//O operador lógico && faz a verificação dos valores, caso o primeiro seja false, o retorno será false e a verificação para ali, mas caso o primeiro valor seja true, ele retorna o segundo valor.

console.log(true && true)//true;
console.log(true && false)//false;
console.log(false && true)//false;
console.log('Gato' && 'Cão')//'Cão';
console.log(5 - 5 && 5 + 5)//0;
console.log("Gato" && false)//false;
console.log(5 >= 5 && 3 < 6)//true;

//Operador lógico ||

//Esse operador retornar o valor da comparação e não um valor lógico, mas se a comparação for entre valores booleanos, então o retornar será um valor desse tipo

//O operador lógico || faz a verificação dos valores, caso o primeiro seja true, esse será retornado (está em busca do primeiro true), caso seja false, a verificação passa pro próximo. Essa verificação só retorna false se ambos os valores forem false

console.log(true || true);// true
console.log(true || false);// true
console.log(false || true);// true
console.log("Gato" || "Cão");// 'Gato'
console.log(5 - 5 || 5 + 5);// 10
console.log("Gato" || false);// Gato
console.log((5 >= 5) || (3 < 6));// true

//Exercícios

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadeParente = 43

if (minhaIdade > idadeParente) {
  console.log('É maior');

}else if(minhaIdade === idadeParente){
  console.log('É igual');

}else{
  console.log('É menor');

}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');

}else{
  console.log('Brasil tem menos habitantes');

}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}