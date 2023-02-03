//Fetch API 2

//Método blob()
//Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformamos requisições de imagens por exemplo. O blob gera um url único

/* const img = fetch('./relampago.jpg');

img.then((r) => {
    console.log(r);
    return r.blob();

}).then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imgDom = document.querySelector('img');

    imgDom.src = blobUrl;

    console.log(body);
    console.log(blobUrl);
}) */


//Método clone()
//Ao utilizarmos os métodos text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores

/* const img = fetch('https://viacep.com.br/ws/08011220/json/');

img.then((r) => {
    const r2 = r.clone();
    const r3 = r.clone();

    r.text().then((texto) => {
        console.log(texto);
    })

    r2.json().then((json) => {
        console.log(json);
    })

    console.log(r);//bodyUsed: true
    console.log(r2);//bodyUsed: true
    console.log(r3);//Nesse o bodyUsed continua false, pois o body ainda não foi modificado
}) */


//Propriedade headers
//É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles

/* const img = fetch('https://viacep.com.br/ws/08011220/json/');

img.then((resposta) => {
    console.log(resposta);
    resposta.headers.forEach(console.log)
}) */


//Propriedades status e ok
//status Retorna o status da requisição. Se foi 404, 200, 202 e mais. 
//ok retorna um valor booleano sendo true para uma  requisição de sucesso e false para uma sem sucesso

/* const img = fetch('https://viacep.com.br/ws/08011220/json/');

img.then((resposta) => {
    console.log(resposta.status);
    console.log(resposta.ok);
}) */


//Propriedade url e type
//url retorna o url da requisição
//type retorna o tipo da resposta

/* const img = fetch('https://viacep.com.br/ws/08011220/json/');

img.then((resposta) => {
    console.log(resposta.url);
    console.log(resposta.type);
}) */