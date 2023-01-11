// Boolean e Condicionais 1

//Valores truthy e falsy

//Todos esses valores retornam false
if (false) {}
if (0) {}
if (NaN) {}
if (false) {}
if (null) {}
if (undefined) {}
if ('') {} //string vazia retorna false, mas se tiver um espaço, retorna true, porque um espaço vazio conta como um carácter

//Todo o restante retornam true

//Operador lógico de negação (!) - esse operador inverte o valor lógico da expressão
//Podemos usar (!!) para verificar se uma expressão é truthy ou falsy
 
var x = 1;
var y;
var w = false
console.log(!x, !y, !w);
console.log(!!x, !!y, !!w);

//Operadores de comparação retornam um valor booleano

console.log(10 > 10, 10 == 10, 10 < 11, 5 >= 5);