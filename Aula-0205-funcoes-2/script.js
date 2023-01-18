// Funções 2

//Return

//Função sem a palavra reservada return: sem o return a função ainda assim será executada, mas retornará undefined por padrão, então, para conseguirmos ver o resultado dessa função, devemos passar um console.log dentro dela
function imc(peso, altura){
    const resultado = peso / (altura ** 2)
    console.log(resultado);
}

imc(65, 1.75)//Mostra só o valor da função
console.log(imc(65, 1.75));//Retorna o valor da função e undefined

//Função com a palavra reservada return: o resultado da função será retornado através do return. Podemos ter apenas um return dentro de uma função e ele mata a execução da função, ou seja, se tivéssemos mais instruções depois do return, elas não seriam executadas
function areaQuadrado(lado){
    const resultado = lado ** 2
    return resultado
}

console.log(areaQuadrado(5));

function terceiraIdade(idade){
    if(typeof idade === 'number'){
        if (idade >= 60) {
            return 'Terceira idade'
        } else {
            return 'Não esta na terceira idade ainda'
        }
    }else{
        return 'Insira um valor numérico'
    }
}

console.log(terceiraIdade(78));

//Escopo
//Uma variável declarada dentro de uma função não é visível fora do escopo dessa função

function faltaVisitar(paisesVisitados){
    var totalPaises = 123;
    return `Falta visitar ${totalPaises - paisesVisitados}`
}

console.log(faltaVisitar(1));
//console.log(totalPaises);//Retorna um erro de referência dizendo que a variável totalPaises não está definida

//Mas conseguimos usar uma variável definida fora de uma função dentro da função (funções tem escopo lexico)

var totalPaises = 123;
function faltaVisitar2(paisesVisitados){
    return `Falta visitar ${totalPaises - paisesVisitados}`
}

console.log(faltaVisitar2(10));

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

console.log(dados());// Retorna 'André, 29, Rio de Janeiro, Designer'
//console.log(outrosDados());// retorna um erro (O erro acontece porque a função outrosDados está no escopo da função dados, portanto, não está visível no escopo pai)