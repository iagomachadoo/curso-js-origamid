// Funções 1

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(6));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

//(peso, altura) -> parâmetros
function imc(peso, altura) {
  const total = peso / (altura ** 2);
  return total;
}

//(65, 1.75) -> argumentos
console.log(imc(65, 1.75));

//Mesmo passando parâmetros em uma função, não precisamos passar argumentos na invocação da função e mesmo assim ela ira funcionar

function corFavorita(cor) {
  switch (cor) {
    case 'azul': 
        console.log('Eu gosto do céu');
      break;
    
      case 'verde': 
        console.log('Eu gosto de mato');
      break;

    default:
        console.log('Eu não gosto de cores');
      break;
  }
}

console.log(corFavorita());

//Callback

//O primeiro parâmetro dessa função é o tipo de evento --'click' -- e o segundo é uma função anônima de callback. Portanto, depois que a função addEventListener for executada, a função anônima function será executada

addEventListener('click', function(){
  //console.log('oi');
})

//Outra forma de executar um callback é criando a função e depois invocá-la dentro da outra função como parâmetro. Nesse caso, não precisamos passar a função que será um parâmetro com os parênteses, que é a sintaxe padrão pra invocar uma função, porque quando ela é passada como callback, o js já entende que é uma função

function mostraConsole() {
  console.log('oi');
}

addEventListener('click', mostraConsole)