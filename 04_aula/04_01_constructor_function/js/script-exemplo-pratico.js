// Objeto 
/*
const Dom = {
    seletor: 'li',
    elemento(){
        return document.querySelector(this.seletor);
    },
    ativar(){
        this.elemento().classList.add('ativar');
    }
}

Dom.ativar();
Dom.seletor = 'ul';
Dom.ativar();
*/

// Constructor Function
function Dom(seletor){
    this.elemento = function(){
        return document.querySelector(seletor);
    }
    this.acao = function(acao){
        this.elemento().classList.add(acao);
    }
} 

const li = new Dom('li');
const ul = new Dom("ul");
const lastChild = new Dom('li:last-child')