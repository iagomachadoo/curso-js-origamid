//Fetch API

/* const doc = fetch('./doc.txt');

doc.then(resolucao => console.log(resolucao)) */



//Pegando o conteúdo do body da requisição

/* const doc2 = fetch('./doc.txt');

doc2.then(resolucao => {
    return resolucao.text()

}).then(body => {
    document.querySelector('.conteudo').innerHTML = body;
    console.log(body)

}); */


//Trabalhando com JSON

const api = fetch('https://viacep.com.br/ws/08011220/json/');
let divConteudo = document.querySelector('.conteudo');

api.then((resposta) => {
    return resposta.json()

}).then((conteudoResposta) => {
    const objeto = conteudoResposta

    for (const key in objeto) {
        if (Object.hasOwnProperty.call(objeto, key)) {
            const element = objeto[key];
            let p = document.createElement('p');

            p.innerText = `${key} - ${element}`

            divConteudo.appendChild(p);
        }
    }
});




const style = fetch('./style.css');

style.then((resolucao) => {
    return resolucao.text()

}).then((resolucao) => {
    let div = document.querySelector('.conteudo')
    let novoElement = document.createElement('style');

    novoElement.innerHTML = resolucao
    div.appendChild(novoElement);

    console.log(resolucao)
})


const paginaSobre = fetch('./sobre.html');
const div = document.createElement('div');
const conteudo = document.querySelector('.conteudo');

paginaSobre.then((r) => {
    return r.text()
}).then((htmlSobre) => {
    div.innerHTML = htmlSobre;
    const titulo = div.querySelector('h1');
    conteudo.appendChild(titulo);
    console.log(div)
})