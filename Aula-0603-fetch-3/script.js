//Exercícios

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const LISTA = document.querySelector('ul');

function buscarEndereco(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resposta) => {
        return resposta.json();
    }).then((corpoResposta) => {
        for (const key in corpoResposta) {
            if (Object.hasOwnProperty.call(corpoResposta, key)) {
                const element = corpoResposta[key];
                if (element) {
                    const ITEM_LISTA = document.createElement('li');
                    ITEM_LISTA.innerText = `${key} - ${element}`;
                    LISTA.appendChild(ITEM_LISTA);
                }; 
            };
        };
    });
}

document.querySelector('#btnCep').addEventListener('click', (e) => {
    e.preventDefault();
    buscarEndereco(document.querySelector('input').value);
    LISTA.innerHTML = ''
});

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const QUANT_BTC = document.querySelector('#btc');
const VALOR_REAL = document.querySelector('#real');

function fetchBtc(quantBtc){
    fetch('https://blockchain.info/ticker')
    .then(resposta => resposta.json())
    .then((btcJson) => {
        VALOR_REAL.value = ((parseInt(quantBtc) * btcJson.BRL.buy).toFixed(2)).toString().replace('.', ',')
    })
}

QUANT_BTC.addEventListener('change', (e) => {
    if(e.target.value < 0){
        e.preventDefault()
    }else{
        setInterval(fetchBtc(e.target.value), 1000 * 30)
    }
})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

function proximaPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((resposta) => resposta.json())
    .then((corpoResposta) => {
        const PIADA = corpoResposta.value
        document.querySelector('#chucknorris p').innerText = PIADA;
    })
}

document.querySelector('#chucknorris button').addEventListener('click', proximaPiada);