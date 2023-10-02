var videogames = ['Xbox', 'PS5', 'Switch'];

console.log(videogames);
console.log(videogames[0]); // Acessando um elemento do array pelo seu índice
console.log(videogames[2]);

// Alguns métodos e propriedades de um array
var ultimoItem = videogames.pop(); // O Método pop() remove o último item do array e retorna ele

console.log(videogames);
console.log(ultimoItem);

videogames.push('Steam Deck'); // O método push() adiciona um novo item ao final do array

console.log(videogames);

var tamanhoArray = videogames.length; // A propriedade length retorna o tamanho do array

console.log(tamanhoArray);

// Loops

// For Loop
// Esse loop conta de 1 até 10
for(var i = 0; i <= 10; i++){
  console.log(i);
}

// While Loop
// Esse loop conta de 10 até 1
var j = 10;
while (j >= 1){
  console.log(j);
  j--;
}

// Interagindo com arrays a partir de um loop
// Mostrando todos os itens de um array
var fruta = ['maçã', 'uva', 'morango', 'banana'];
console.log(fruta);

for(let i = 0; i < fruta.length; i++){
  console.log(fruta[i]);
}

// Usando o break
var carros = ['gol', 'ferrari', 'fusca', 'uno', 'focus'];
for(let i = 0; i < carros.length; i++){
  console.log(carros[i]);
  if(carros[i] === 'fusca'){
    break; // quando o item for igual a 'fusca' o loop será paralisado
  }
}

// ForEach Loop
var cidades = ['Itaocara', 'Aperibé', 'Cambuci', 'Santo Antônio de Pádua'];
cidades.forEach(function(cidade, indice, array){
  console.log(cidade);
  console.log(indice);
  console.log(array);
  console.log(this);
}, 'olá, mundo!');