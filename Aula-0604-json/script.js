//Trabalhando com JSON

fetch('./dados.json')
.then(r => r.json())
.then((json) => {
    json.forEach(item => console.log(item.id, item.aula, item.tempo))
})


//Método stringfy() do objeto JSON
//Esse método transforma um objeto js em uma string no formato json

const CONFIGURACAO = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

const STRING_CONFIG = JSON.stringify(CONFIGURACAO)

console.log(CONFIGURACAO);
console.log(STRING_CONFIG);