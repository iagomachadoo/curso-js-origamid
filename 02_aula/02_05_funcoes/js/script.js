// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor){
    return !!valor;
}
console.log(isTruthy(1));
console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadradro(lado){
    return lado * 4;
}
console.log(perimetroQuadradro(4));
console.log(perimetroQuadradro(6));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName('Iago', 'Machado'));

// Crie uma função que verifica se um número é par
function isPar(valor){
    var par = valor % 2;
    if(par === 0){
        return `${valor} é par`;
    }else{
        return `${valor} é ímpar`;
    }
}
console.log(isPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDados(valor){
    return typeof valor;
}
console.log(tipoDeDados('olá mundo!'));
console.log(tipoDeDados(1));
console.log(tipoDeDados(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function showFullName(){
    console.log('Iago da Silva Machado');
}
addEventListener('scroll', showFullName);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
