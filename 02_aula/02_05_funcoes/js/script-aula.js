function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4

function pi(){
  return 3.14;
}

var total = 2 * pi();
console.log(total);

function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(70, 1.74));

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Cor favorita azul';
  }else if(cor === 'verde'){
    return 'Cor favorita vermelho';
  }else{
    return 'Não tenho cor favorita';
  }
}

console.log(corFavorita('azul'));

// Função sem return
function imc2(peso, altura) {
    const imc = peso / altura ** 2;
    console.log(imc);
}

imc2(60, 1.70); // 20.761245674740486
console.log(imc2(65, 1.60)); // 25.390624999999996 | undefined

// Escopo

var totalPaises = 193; // escopo global
function faltaVisitar(paisesVisitados){
  // var totalPaises = 193; // escopo local
  var total = totalPaises - paisesVisitados;

  return `Falta visitar ${total} paises`;
}

// console.log(totalPaises); // ReferenceError: totalPaises is not defined - se a variavel estiver em um escopo local (dentro de uma função ou bloco {}) ela só é visível dentro desse escopo

console.log(totalPaises); // 193 - Como a variável agora está no escopo global (fora do bloco da função) ela é acessível em qualquer parte do código

// Escopo Lexico - closure | funções definidas dentro de funções tem acesso a variáveis da função pai
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro porque essa função pertence a um escopo local, dessa forma, não é acessível no escopo global

