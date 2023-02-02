//Trabalhando com promises

//Criando uma promises
/* const promesa = new Promise(function(resolve, reject){
    let condicao = true;

    if(condicao){
        resolve('Olá, mundo!');

    }else{
        //O construtor Error é uma forma de passar erros em tempo de execução
        reject(Error('Um erro ocorreu na promise'));
    }

}); */

//console.log(promesa);

//Método then()

/* const promesa2 = new Promise((resolve, reject)=>{
    let condicao = true;

    if (condicao) {
        resolve({nome: 'Fulano', idade: 30, cidade: 'Aquela lá'});
    }else{
        reject('Um erro ocorreu na promessa');
    }
}); */

//O método then() é herdado do construtor Promise. O callback do then só será ativado quando a promise for resolvida. O argumento do callback do then receberá o valor da função resolve() 

//promesa2.then((resolucao) => console.log(resolucao));

//Executando código assíncrono
//A promise só será executada depois de 1s

/* const promesa3 = new Promise((resolve, reject)=>{
    let condicao = true;

    if (condicao) {
        setTimeout(()=>{
            resolve({nome: 'Fulano', idade: 30, cidade: 'Aquela lá'});
        }, 1000);

    }else{
        reject('Um erro ocorreu na promessa');
    }
}); */

//promesa3.then((resolucao) => console.log(resolucao));

//Encadeando o método then()

/* const promesa4 = new Promise((resolve, reject)=>{
    let condicao = true;

    if (condicao) {
        setTimeout(()=>{
            resolve({nome: 'Fulano', idade: 30, cidade: 'Aquela lá'});
        }, 1000);

    }else{
        reject('Um erro ocorreu na promessa');
    }
});

promesa4.then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = 'Dev';

    return resolucao;

}).then(resolucao => console.log(resolucao)); */

//Usando o método catch()
//O método catch() adiciona um callback a promise que será ativado caso a mesma seja rejeitada

/* const promesa5 = new Promise((resolve, reject)=>{
    let condicao = false;

    if (condicao) {
        setTimeout(()=>{
            resolve({nome: 'Fulano', idade: 30, cidade: 'Aquela lá'});
        }, 1000);

    }else{
        reject('Um erro ocorreu na promessa');
    }
});

promesa5.then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = 'Dev';

    return resolucao;

}).then(resolucao => {
    console.log(resolucao)

}).catch((rejeitada) => {
    console.log(rejeitada);
}); */

//Passando a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento

/* const promesa6 = new Promise((resolve, reject)=>{
    let condicao = false;

    if (condicao) {
        setTimeout(()=>{
            resolve({nome: 'Fulano', idade: 30, cidade: 'Aquela lá'});
        }, 1000);

    }else{
        reject('Um erro ocorreu na promessa');
    }
});

promesa6.then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = 'Dev';

    return resolucao;

}).then(resolucao => {
    console.log(resolucao)

}, rejeitada => {
    console.log(rejeitada);

}); */

//Usando o método finally()
//O método finally é executado independente se a promise for resolvida ou rejeitada
//Ele não recebe valor algum da promise

/* const promesa7 = new Promise((resolve, reject)=>{
    let condicao = false;

    if (condicao) {
        setTimeout(()=>{
            resolve({nome: 'Fulano', idade: 30, cidade: 'Aquela lá'});
        }, 1000);

    }else{
        reject('Um erro ocorreu na promessa');
    }
});

promesa7.then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = 'Dev';

    return resolucao;

}).then(resolucao => {
    console.log(resolucao)

}, rejeitada => {
    console.log(rejeitada);

}).finally(() => {
    console.log('Acabou');

}); */


//Método do objeto Promise

//Método all()
//É possível passar uma array com varias promessas 
//Esse método retorna uma promessa que só será resolvida se todas as promessas passadas na array forem resolvidas ou pelo menos uma for rejeitada

/* const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado')
    });

}, 1000);

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    });
    
}, 1500);

//Promise.all() - Promise é um objeto e all() é um método
const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
}) */

//Método race()
//É possível passar uma array com varias promessas
//Esse método retorna uma promessa que será resolvida quando a primeira promise passada no array for resolvida ou rejeitada. A resposta da promise será a resposta da primeira 

/* const login2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado')
    });

}, 2000);

const dados2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    });
    
}, 500);

//Promise.race() - Promise é um objeto e race() é um método
const carregouTudo2 = Promise.race([login2, dados2]);

carregouTudo2.then((resolucao) => {
    console.log(resolucao);
}) */