'use strict'

const conteudo = document.querySelector('.conteudo');
const BTN_PESQUISAR_DRINK =document.querySelector('#pesquisar');

function responseImgIngrediente(ingrediente){
    return fetch(`https://www.thecocktaildb.com/images/ingredients/${ingrediente}-Small.png`);
}

function pesquisarDrink(nomeDrink){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nomeDrink}`).then((r) => {
        console.log(r);
        return r.json();
    
    }).then((r) => {
        const nomeDrink = r.drinks
        nomeDrink.forEach(item => {
            const drink = item.strDrink
            const img = item.strDrinkThumb
            const INTRUCAO = item.strInstructions;
            
            const boxIngredientes = document.createElement('div');
            boxIngredientes.setAttribute('class', 'box-ingredientes row mb-4 p-2');
    
            const row = document.createElement('div');
            row.setAttribute('class', 'row');
    
            const boxTumb = document.createElement('div');
            boxTumb.setAttribute('class', 'col-4 ps-0');
    
            const listaIngredientes = document.createElement('ul');
            listaIngredientes.setAttribute('class', 'col-8 m-0 p-0');
    
            const tituloIngredientes = document.createElement('h2');
            tituloIngredientes.setAttribute('class', 'text-center');

            const imgDrink = document.createElement('img');
            imgDrink.setAttribute('src', img);
            imgDrink.setAttribute('class', 'img-fluid');

            const CONTEUDO_INSTRUCAO = document.createElement('p');
            CONTEUDO_INSTRUCAO.setAttribute('class', 'intrucao');

            tituloIngredientes.innerText = drink;
            CONTEUDO_INSTRUCAO.innerText = INTRUCAO
            console.log(item);
        
            for (let index = 1; index < 15; index++) {
                const numIngrediente = `strIngredient${index}`;
                const quantIngrediente = `strMeasure${index}`;
                const ingredientesDrink = item[numIngrediente];
                const quantIngredientesDrink = item[quantIngrediente];
                
                if(ingredientesDrink){
                    const ingrediente = document.createElement('li'); 
                    ingrediente.setAttribute('class', 'col-4 p-0 mb-2 d-flex flex-column align-items-center');
    
                    responseImgIngrediente(ingredientesDrink).then((r) => {
                        return r.url;
                        
                    }).then((r) => {
                        const imgIngrediente = document.createElement('img');
                        imgIngrediente.setAttribute('src', r)
                        
                        const nomeIngrediente = document.createElement('span');
                        nomeIngrediente.setAttribute('class', 'd-block text-center')
                        nomeIngrediente.innerText = `${ingredientesDrink} - ${quantIngredientesDrink}`;
                        
                        row.appendChild(ingrediente);
                        ingrediente.appendChild(imgIngrediente);
                        ingrediente.appendChild(nomeIngrediente);
                    })
                }
            }
    
            conteudo.appendChild(boxIngredientes);
            boxIngredientes.appendChild(boxTumb);
            boxTumb.appendChild(imgDrink);
            boxTumb.appendChild(tituloIngredientes);
            boxIngredientes.appendChild(listaIngredientes);
            boxIngredientes.appendChild(CONTEUDO_INSTRUCAO);
            listaIngredientes.appendChild(row);
        });
    })
}

BTN_PESQUISAR_DRINK.addEventListener('click', (e)=>{
    e.preventDefault();

    const DRINK_A_PESQUISAR = document.querySelector('#nome-drink');

    if(DRINK_A_PESQUISAR.value && !parseInt(DRINK_A_PESQUISAR.value)){
        document.querySelector('.alerta').classList.remove('d-block');
        pesquisarDrink(DRINK_A_PESQUISAR.value);
        DRINK_A_PESQUISAR.value = '';

    }else{
        document.querySelector('.alerta').classList.add('d-block');
    }

    conteudo.innerHTML = '';
})

function converteValor(valor){
    console.log(valor);
}