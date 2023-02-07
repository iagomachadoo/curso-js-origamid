//API e HTTP

//r => r.json() - transforma a resposta da api em um json

/* fetch('https://pokeapi.co/api/v2/pokemon/')
.then(r => r.json())
.then(pokemon => {
  console.log(pokemon);
}); */

/* fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(r => r.json())
.then(pokemon => {
  console.log(pokemon);
}); */


//Métodos http em uma requisição
//Options é o segundo parâmetro do fetch
/* 
var option = {
  method: "" - é o método da requisição, por padrão é o get
  body: "" - é o corpo do registro, ou seja, os dados que serão enviados
  headers: - é  o tipo de dado/arquivo que será enviado
}
*/

/* const REQUISICAO = 'https://jsonplaceholder.typicode.com/posts/';
const OPTIONS = {
  method: "POST",
  body: '{"title" : "JavaScript", "body": "Essa é uma requisição do tipo POST"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
};

fetch(REQUISICAO, OPTIONS)
.then(response => response.json())
.then(json => console.log(json)) */

const REQUISICAO = 'https://jsonplaceholder.typicode.com/posts/';
const OPTIONS = {
  method: "HEAD",
};

fetch(REQUISICAO, OPTIONS)
.then(response => {console.log(response.headers.forEach(console.log))})