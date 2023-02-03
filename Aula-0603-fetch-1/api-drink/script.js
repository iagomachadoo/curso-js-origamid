const nomeDrink = 'daiquiri';
const conteudo = document.querySelector('.conteudo');
const titulo = document.querySelector('h1');
const img = document.querySelector('img');

const responseDrink = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nomeDrink}`);

function responseImgIngrediente(ingrediente){
    return fetch(`https://www.thecocktaildb.com/images/ingredients/${ingrediente}-Small.png`);
}
const responseImg = 

responseDrink.then((r) => {
    return r.json();

}).then((r) => {
    console.log(r);
    const nomeDrink = r.drinks
    nomeDrink.forEach(item => {
        const drink = item.strDrink
        const img = item.strDrinkThumb

        const boxIngredientes = document.createElement('div');
        boxIngredientes.setAttribute('class', 'box-ingredientes row mb-4 p-2');

        const row = document.createElement('div');
        row.setAttribute('class', 'row');

        const boxTumb = document.createElement('div');
        boxTumb.setAttribute('class', 'col-4');

        const listaIngredientes = document.createElement('ul');
        listaIngredientes.setAttribute('class', 'col-8 m-0 p-1');

        const tituloIngredientes = document.createElement('h2');
        const imgDrink = document.createElement('img');
        imgDrink.setAttribute('src', img);
        imgDrink.setAttribute('class', 'img-fluid');

        tituloIngredientes.innerText = drink
        console.log(item);
    
        for (let index = 1; index < 15; index++) {
            const numIngrediente = `strIngredient${index}`;
            const ingredientesDrink = item[numIngrediente];
    
            if(ingredientesDrink){
                const ingrediente = document.createElement('li'); 
                ingrediente.setAttribute('class', 'col-4 py-1 px-2 d-flex flex-column align-items-center');

                responseImgIngrediente(ingredientesDrink).then((r) => {
                    return r.url;
                    
                }).then((r) => {
                    const imgIngrediente = document.createElement('img');
                    imgIngrediente.setAttribute('src', r)
                    
                    const nomeIngrediente = document.createElement('span');
                    nomeIngrediente.setAttribute('class', 'd-block text-center')
                    nomeIngrediente.innerText = ingredientesDrink;
                    
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
        listaIngredientes.appendChild(row);
    });
})
