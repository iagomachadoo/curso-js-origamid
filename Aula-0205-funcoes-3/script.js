//Exercício

// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor){
    if(!!valor){
        return `O valor: ${valor} é truthy`;
    }else{
        return `O valor: ${valor} é falsy`;
    }
}

console.log(valorTruthy());

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
    const total = lado * 2;
    return `O perímetro de um quadrado de lado ${lado} = ${total}`;
}

console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(first, last){
    return `Meu nome completo é: ${first} ${last}`;
}

console.log(nomeCompleto('Iago', 'Machado'));

// Crie uma função que verifica se um número é par
function verificaParOuImpar(numero){
    const restoDivisao = numero % 2 === 0

    if(restoDivisao){
        return` O número ${numero} é par`; 
    }else{
        return` O número ${numero} é ímpar`; 

    }
}

console.log(verificaParOuImpar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(valor){
    const tipoDado = typeof valor;
    return `O valor ${valor} é do tipo ${tipoDado}`
}

console.log(verificaTipo(1));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log('Meu nome é Iago')
});

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
