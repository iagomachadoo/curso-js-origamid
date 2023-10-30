// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const elements = document.querySelectorAll.bind(document);
// const totalCaracteres = Array.from(elements('p')).reduce((a, item) => a + item.innerText.length, 0); // Transformando o array-like em array

const totalCaracteres = Array.prototype.reduce.call(elements('p'), (a, item) => a + item.innerText.length, 0); // utilizando o método call

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newHtml(tag, classe, conteudo){
    const element = document.createElement(tag);
    classe ? element.setAttribute('class', classe) : null;
    conteudo ? element.innerText = conteudo : null;

    return element;
}

const paragrafo = newHtml('p', 'texto', 'Olá Mundo');
const subtitulo = newHtml('h2', 'subtitulo', 'Html, Css e JavaScript');
console.log(paragrafo);
console.log(subtitulo);

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const titulo = newHtml.bind(null, 'h1', 'titulo');
console.log(titulo('Título Principal'));