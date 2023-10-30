// create()
const carro = {
    rodas: 4,
    init(valor){
        this.marca = valor;
        return this; 
    },
    acelerar(){
        return `${this.marca} acelerou`
    },
    buzinar(){
        return `${this.marca} buzinou`
    },
};

// criando um novo objeto a partir do anterior
const honda = Object.create(carro).init('honda');
const ferrari = Object.create(carro).init("ferrari");

// assign()
const funcaoAutomovel = {
    acelerar() {
        return "acelerou";
    },
    buzinar() {
        return "buzinou";
    },
};

const moto = {
    rodas: 2,
    capacete: true,
};

const onibus = {
    rodas: 4,
    mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(onibus, funcaoAutomovel);

// defineProperties()
const bike = {} // Para usar o método defineProperties o objeto já deve ter sido criado
Object.defineProperties(bike, {
    rodas: {
        value: 2,
        configurable: false, // impede deletar e mudança de valor - tem o valor false por padrão
        enumerable: true, // torna enumerável - tem o valor false por padrão
    },
    capacete: {
        value: true,
        configurable: false,
        enumerable: true,
        writable: false, // impede mudança de valor - tem o valor false por padrão
    },
});

bike.rodas = 4;
delete bike.capacete;
bike;
// {rodas: 2}

// get e set
const caminhao = {}
Object.defineProperties(caminhao, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

caminhao.velocidade = 200;
caminhao.velocidade;
// Velocidade 200

// getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(Array)); // Lista com métodos e propriedades do Array
console.log(Object.getOwnPropertyDescriptors(Array.prototype)); // Lista com métodos e propriedades do protótipo de Array
console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight')); // Puxa de uma única propriedade
console.log(Object.getOwnPropertyDescriptors(caminhao));

// Object.keys(obj) & Object.values(obj) & Object.entries(obj)
console.log(Object.keys(bike)); // retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. A propriedade configurable também deve ser false
console.log(Object.values(bike)); // retorna uma array com os valores do objeto.
console.log(Object.entries(bike)); // retorna uma array com array's contendo a chave e o valor.

// Object.getOwnPropertyNames(obj)
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(bike));

// Object.getPrototypeOf(obj)
console.log(Object.getPrototypeOf([]));
console.log(Array.prototype);

console.log(Object.getPrototypeOf(''));
console.log(String.prototype);

// Object.is(obj1, obj2)
const fruta1 = ['banana', 'uva'];
const fruta2 = ["banana", "uva"];

console.log(fruta1, fruta2);
console.log(Object.is(fruta1, fruta2)); // false - retorna false porque os objetos não são iguais, ou seja, se eu alterar qualquer um dos dois, o outro não sofrerá alteração

const novaFruta = fruta1
console.log(Object.is(fruta1, novaFruta)); // true - retorna true que ambos os objetos são iguais se eu mudar fruta1 ou novaFruta, ambos serão alterados

novaFruta[2] = 'Morango'
console.log(fruta1, novaFruta);

// Object.freeze(obj) & Object.seal(obj) & Object.preventExtensions();
const automovel = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(automovel);
Object.seal(automovel);
Object.preventExtensions(automovel);

Object.isFrozen(automovel); // true
Object.isSealed(automovel); // true
Object.isExtensible(automovel); // false

// Propriedades e métodos do protótipo
const frutas = ['Banana', 'Uva'];
frutas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

const frutas2 = ['Banana', 'Uva'];

frutas2.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

const frutas3 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas3); // true


const frutas4 = ['Banana', 'Uva'];
frutas4.toString(); // 'Banana,Uva'
typeof frutas4; // object
Object.prototype.toString.call(frutas4); // [object Array]

const frase2 = 'Uma String';
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro2 = {marca: 'Ford'};
carro2.toString(); // [object Object]
typeof carro2; // object
Object.prototype.toString.call(carro2); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
