//Array e loops 1

//Declarando um array
var videogame = ['xbox', 'playstation', 'switch', 'PS4'];

//Mostrando todo o array
//console.log(videogame);

//Mostrando cada posição de uma array
//console.log(videogame[0], videogame[1], videogame[2]);//Acessando cada item do array

//for loop
for (let index = 0; index < videogame.length; index++) {
    const element = videogame[index];
    //console.log(element);
}

//while loop
index = 0
while (index < videogame.length) {
    //console.log(videogame[index]);
    index++;
}

//Comando break - esse comando serve para quebrar a execução do loop
for (let index = 0; index < videogame.length; index++) {
    const element = videogame[index];

    //console.log(element);

    if(element === 'switch'){
        break;
    }
}

//Com o foreach, podemos de forma mais fácil iterar por todos os itens de um array
//O foreach aceita até três parâmetro, o 1° é o parâmetro que receberá o valor de cada item, o 2° é o índice de cada item e o 3° e a array 
videogame.forEach(function(item, index, array){
    //console.log(item, index, array);
})

//Exercícios

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const brasilCampeao = [1959, 1962, 1970, 1994, 2002];

console.log(brasilCampeao);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach((ano) => {
    console.log(`O Brasil ganhou a copa de ${ano}`)
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0; i < frutas.length; i++){
    let fruta = frutas[i]
    console.log(fruta);
    if(fruta == 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length -1]
console.log(ultimaFruta);