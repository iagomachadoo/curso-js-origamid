# Curso JavaScript ES6 - Origamid

## JavaScript
- JavaScript é uma linguagem **interpretada**, ou seja, ela não é traduzida (compilada) para código de máquina, mas é executada linha por linha por um programa chamado **interpretador**. O interpretador lê o código-fonte, analisa-o e executa as instruções em tempo real, sem a necessidade de compilar o código antecipadamente.

- Algumas caracteristicas de linguagens interpretada
    - Execução em tempo real
    - Portabilidade 
    - Facilidade de depuração 
    - Desempenho geralmente menos do que as linguagens compiladas

- Exemplos de linguagens interpretadas: Python, Ruby, JavaScript, PHP, Perl e muitas outras

### Variáveis
- Existem 3 formas de declarar uma variável
    - Com a palavra reservada **var**
        - Tem **escopo de função e global**, ou seja, se uma variável for declarada com **var** fora de uma função, ela fica acessível globalmente dentro do código e ser for declarada dentro de uma função, ela fica acessível em todo o contexto dessa função

        - Variáveis **var** são **"içadas"** (hoisted) para o topo do escopo em que foram declaradas. Isso significa que você pode usar a variável antes de declará-la no código, mas seu valor será undefined até que seja atribuído.

        - Variáveis var podem ser reatribuídas e redeclaradas no mesmo escopo sem gerar erros.

        -   ```
                function exemplo() {
                    var x = 10;
                    if (true) {
                        var x = 20; // Esta reatribuição afeta a variável x em todo o escopo da função.
                    }
                    console.log(x); // Imprime 20, não 10.
                }

            ```

    - Com a palavra reservada **let**
        - Variáveis declaradas com **let** têm **escopo de bloco**, o que significa que são acessíveis apenas dentro do bloco em que foram declaradas, como em loops for ou if.

        - Assim como as variáveis var, as variáveis let também são içadas, mas a diferença é que você não pode acessar a variável antes de declará-la, ou seja, você não pode usar uma variável let antes de sua declaração no código.

        - Variáveis let podem ser reatribuídas, mas não redeclaradas no mesmo escopo.

        -   ```
                if (true) {
                    let y = 30;
                    y = 40; // OK, reatribuição.
                }
                console.log(y); // Erro, y não está definido fora do bloco.
            ```

    - Com a palavra reservada **const**
        - Assim como let, as variáveis declaradas com const também têm escopo de bloco.

        - As variáveis const também são içadas, mas, assim como let, você não pode acessar uma variável const antes de sua declaração.

        - Diferentemente de var e let, as variáveis const não podem ser reatribuídas após a atribuição inicial. No entanto, objetos e arrays declarados com const podem ter suas propriedades ou elementos alterados.

        -   ```
                const z = 50;
                z = 60; // Erro, não pode reatribuir uma constante.

                const arr = [1, 2, 3];
                arr.push(4); // Isso é permitido, pois não estamos reatribuindo arr, apenas modificando seu conteúdo.
            ```

    - O nome de uma variável não pode ser uma palavra reservada e nem começar com um número, mas pode começar com $, _, ou letras

    - O JavaScript é **case sensitive**, ou seja, há à diferença entre letras maiusculas e minusculas. Dessa forma as variáveis nome e Nome são diferentes

### Tipos de dados
- Existem 7 tipos principais de dados
    - String
    
    - Number

    - Boolean

    - Undefined

    - Null

    - Symbol

    - Object

    - Todos esses tipos de dados são primitivos, exceto o Object

    - Dados primitivos são imutáveis, o que significa que, uma vez criados, eles não podem ser modificados. Qualquer operação em um valor primitivo, como uma operação matemática em um número ou uma concatenação em uma string, resultará em um novo valor, em vez de modificar o valor original
        -   ```
                let x = 5;
                let y = x + 3; // y será 8, x continua sendo 5

            ``` 

### Números e Operadores
- O JavaScript tem uma precisão de até 15 dígitos

- Temos diversos operadores como adição (+), subtração (-), multiplicação (*), divisão (/), exponenciação (**) e o módulo ou resto da divisão (%)

- Quando se trata de operadores e string, temos alguns comportamentos interessantes. 
    - Caso quisermos somar uma string e um número, o js vai converter ambos pra string e fazer a concatenação

    - Os demais operadores conseguem realizar a operação desejada, porque o js não faz a conversão dos operandos pra string, isso só acontece no caso do operador **+**

    - Nos casos de operações além da adição, a string deve ter apenas caracteres numéricos, se existir qualquer caracter que não seja numérico, o resultado será **NaN - not a number**

    - É possível verificar se uma variável é NaN ou não com a função **isNan()**

    - A precedencia de operadores existente na matemática é aplicada nas operações. Ou seja, a ordem importa, a maior precedencia é dos operadores * e / respetivamente. Depois vem os operadores de + e -

    - Contudo, podemos usar parêntese, conforme na matemática para priorizar uma expressão

    - Temos também os operadores unários, que são conhecidos como operadores de incremento/decremento
        - Esses operadores são o **++** e o **--**

        - Contudo, a ordem deles importam pro resultado, caso usemos o operador após o operando, o incremento só será feito depois. Da mesmo forma, se usarmos o operador antes do operando, o incremento será feito antes

        -   ```
                // Exemplo 
                var x = 2;
                var y = 5;
                var z = 10;
                var w = 14;

                // Operador antes
                console.log(++x) //3
                console.log(--y) //4

                // Operador antes
                console.log(z++); // 10
                console.log(w--); // 14

                console.log(z) // 11
                console.log(w) / 13
            ```

        - Outra forma de usar um operador unário, é usando apenas um sinal de **+** ou **-** antes de uma string. Dessa forma, o javascript força a conversão dessa string em number. Contudo, se a string conter caracteres além dos numéricos, o resultado será **NaN**
            -   ```
                    var string = '28';
                    var outraString = 'Dia 30';

                    console.log(+string); // 28
                    console.log(-string); // -28
                    console.log(+outraString); // NaN
                    console.log(-outraString); // NaN
                ```

### Boolean e Condicionais
- As operações condicionais servem para verificar se uma condição é verdadeira ou falsa, e a partir desse resultado, executar algum trecho de código
    -   ```
            if(exp){
                ...
            }

            if(exp){
                ...
            }else if(exp2){
                ...
            }

            if(exp){
                ...
            }else{
                ...
            }

            if(exp){
                ...
            }else if(exp2){
                ...
            }else{
                ...
            }
        ```

    - Ainda temos uma sintaxe abreviada pra escrever as condicionais **if**
        - Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

        -   ```
                var possuiFaculdade = true;

                if(possuiFaculdade) console.log('Possui Faculdade');
                else console.log('Não possui Faculdade');

                // ou

                if(possuiFaculdade)
                    console.log('Possui Faculdade');
                else
                    console.log('Não possui Faculdade');
            ```
- Valores truthy e falsy
    - Todos essas condições abaixo retornam false, as demais, retornarão true
        - ` if(false) `

        - ` if(0) // ou -0 `

        - ` if(NaN) `

        - ` if(null) `

        - ` if(undefined) `

        - ` if('') // ou "" ou `` `

- Existe o operador lógico de negação, esse operador é o **!**. Ou seja, sua função é inverter o valor lógico de uma condicional
    - `!true == false`

    - `!false == true`

    - Podemos utilizar o operador **!!** para verificar se uma expressão é truthy ou falsy 

- Existem os operadores de comparação que sempre irão retornar um valor booleano (true ou false)
    - `10 > 5 // true`

    - `5 > 10 // false`

    - `20 < 10 // false`

    - `10 <= 10 // true`

    - `10 >= 11 // false`

    - `10 == '10' // true (== verifica se um valor é igual ao outro)`

    - `10 === '10' // true (=== verifica se um valor é igual ao outro e também verifica se os tipos são iguais)`
    - `11 != '11' // false (== verifica se um valor é diferente do outro)`

    - `11 !== '11' // true (=== verifica se um valor é diferente do outro e também verifica se os tipos são diferentes)`

- Existem também os operadores lógicos **&& (and)** e **|| (or)**
    - Esses operadores servem para realizar operações de lógica booleana em valores booleanos

    - E diferente dos operadores de comparação que sempre retornam valores booleanos (true ou false), os operadores lógicos retornam um valor

    -   ```
            // Operador and - Se ambos os valores forem true, ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
            if(exp1 && exp2){
                ...
            }

            // Operador or - retorna o primeiro valor true que encontrar
            if(exp1 || exp2){
                ...
            }

            // Operador not
            if(!exp1){
                ...
            }
        ```

- Temos também o operador **switch** que a partir dele, podemos verificar se uma variável é igual a diferentes valores utilizando o **case**. Caso seja igual, podemos executar algum trecho de código e logo após utilizar a expressão **break** para cancelar a continuação 
    -   ```
            var a = 1;

            switch (a){
                case 1:
                    ...
                    break;
                case 2:
                    ...
                    break;
                default:
                    ...
            }
        ```

- Operador ternário
    - Abreviação de condicionais com **if e else**

    - É geralmente usado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

    - Sintaxe   
        - `condicao ? true : false`

    - Exemplo
        -   ```
                var idade = 19;
                var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
                console.log(podeBeber) // Pode beber;
            ```

### Funções
- São blocos de código que podem ser executados e reutilizados

- Valores podem ser passados por uma função e a mesma retornar outro valor

-   ```
        function areaQuadrado(lado){
            return lado * lado;
        }

        areaQuadrado(4); //16
        areaQuadrado(5); //25
    ```

- Para uma função ser invocada, devemos passar seu nome juntamente com parenteses
    -   ```
            function nomeFunc(){}
            nomeFunc() //invocando a função

            //se não passarmos os parenteses, o retorno será a função em si 
        ```

- Parâmetros e argumentos
    - Ao cria uma função, podemos passar parâmetros
    - Ao executar a função, podemos passar argumentos
    - Separamos mais de um parâmetro e argumento por vírgula. Também podemos criar e executar uma sem a necessidade de passar parâmetros/argumentos

- Argumentos podem ser funções, que são chamadas de callback. Esse caso, onde passamos um callback acorre muito em operações assíncronas ou em eventos

- Quando passamos uma função sem nome, ela é chamada de função anonima
    - `addEventListener('event', function(){});`

- Uma função pode ou não retornar um valor. Quando não definimos o **return**, ela irá retornar **undefined**. O código dentro da função será executado normalmente, independente de existir valor de retorno ou não

- Uma função pode retornar qualquer tipo de dados e até outras funções. Contudo, o ideal é que uma mesma função retorne apenas um tipo de dado

- Quando usamos o **return** a execução da função e paralisada no momento em que o return é executado. Ou seja, é uma forma de parar a execução da função 

- Propriedades
    - O prototipo das funções é acessado atraves da função e não da sua execução, ou seja, `soma.length` é diferente de `soma().length`. Quando se trata de acessar as propriedades e métodos da função, a forma correta é `soma.length`

    - **`Function.length`** retorna o total de argumentos da função. 
    
    - **`Function.name`** retorna uma string com o nome da função.

    - **`function.call(this, arg1, arg2, ...)`** executa a função, sendo possível passarmos uma nova referência ao this da mesma.
        - O valor de **this** faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

        - O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

### Escopo
- No JavaScript, existem dois principais tipos de escopo: o **escopo global** e o **escopo local** (também conhecido como escopo de função ou bloco). Esses escopos determinam onde as variáveis e funções são acessíveis dentro do código.
    - **Escopo Global**: As variáveis declaradas fora de qualquer função ou bloco de código têm escopo global. Isso significa que elas podem ser acessadas de qualquer lugar no código, tanto dentro de funções quanto no escopo global. Variáveis globais são acessíveis por todo o código, o que pode levar a problemas de encapsulamento e colisões de nomes.
        -   ```
                var globalVar = 10;

                function exemplo() {
                    console.log(globalVar); // Acesso à variável globalVar
                }   

            ```

    - **Escopo Local (de Função ou Bloco**): Variáveis declaradas dentro de uma função ou bloco de código têm escopo local. Elas são acessíveis apenas dentro da função ou do bloco em que foram declaradas. Isso ajuda a evitar conflitos de nomes e protege as variáveis de modificações indesejadas.
        -   ```
                // Escopo de função
                function exemplo() {
                    var localVar = 5; // Escopo local
                    console.log(localVar);
                }

                console.log(localVar); // Isso resultará em um erro, pois localVar não está definida aqui.

                //Escopo de Bloco (a partir do ES6/ECMAScript 2015)
                if (true) {
                    let blockVar = 10; // Escopo de bloco
                    var globalVar = 20;
                    console.log(blockVar); 
                }

                console.log(blockVar); // Isso resultará em um erro, pois blockVar não está definida aqui.
                
                console.log(globalVar); // 20 - Variáveis criadas com var dentro de um escopo de bloco podem vazar esse escopo e serem acessadas fora dele. Isso não acontece no escopo de função
            ```

    - Além desses dois principais tipos de escopo, vale a pena mencionar que o JavaScript também possui **escopo de função aninhado (também conhecido como escopo lexico)**. Isso significa que funções podem ser definidas dentro de outras funções, e as funções internas têm acesso às variáveis das funções externas. Isso é conhecido como **"closure"** e é uma parte poderosa da linguagem JavaScript.

    - Se declararmos variáveis sem a palavra chave **var, let ou const**, estaremos criando uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro. O uso da declaração **"use strict"** impede esse comportamento

### Objetos
- São conjuntos de variáveis e funções, que são chamados de propriedades e métodos 

- Propriedades e métodos consistem em nome (chave) e valor

- Para acessar uma propriedade ou função de um objeto, temos que usar a sintaxe **nomeObjeto.propriedade**

- Métodos de um objeto são propriedades que sem como valor uma função

- Contudo, propriedades de um objeto não podem ser acessadas diretamente dentro de um método do mesmo objeto, para que essas propriedades sejam acessadas, devemos usar a palavra-chave **this**
    - Em linguagens de programação orientadas a objetos, como JavaScript, a utilização do this ao acessar propriedades criadas dentro de um objeto dentro de seus próprios métodos é fundamental por diversas razões:

    - Clareza e Ambiguidade: Ao acessar uma propriedade sem utilizar o this, pode haver confusão quanto à origem da variável, gerando ambiguidade no código. O uso do this torna claro que você está se referindo a uma propriedade do objeto em vez de uma variável local.

    - Contexto de Execução: O this em JavaScript representa o contexto de execução atual. Em métodos de um objeto, o this se refere ao próprio objeto. Isso é crucial para acessar corretamente as propriedades e métodos específicos do objeto no qual o método está sendo chamado.

    - Reutilização de Código: A utilização do this permite que funções sejam reutilizadas em diferentes objetos. Sem o this, a função pode não funcionar adequadamente quando chamada de diferentes objetos, pois não teria acesso às propriedades específicas do objeto atual.

    - Em resumo, o uso do this dentro de métodos de objetos em linguagens orientadas a objetos, como JavaScript, promove a clareza, define o contexto de execução adequado e possibilita a reutilização eficiente de código, tornando-o uma prática essencial para programação orientada a objetos.

    - No entanto, é importante observar que em alguns casos, como funções que são chamadas fora do contexto do objeto, o uso de this pode não se comportar como esperado, e aí é necessário tomar cuidado com a manipulação do contexto. Existem métodos, como bind, call e apply, que podem ser usados para controlar explicitamente o valor de this em funções.

- **Tudo em JavaScript é um objeto**. Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos

- Métodos do construtor Object
    - `Object.create(obj, defineProperties)`
        - Retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

        - Ou seja, a partir de um objeto que foi criado, podemos criar um novo objeto que vai utilizar as mesmas propriedade e métodos que o objeto "pai" já tem. É semelhante a quando usamos uma função construtora

        - Sintaxe
            - `Object.create(obj, defineProperties)`

    - `Object.assign(alvo, obj1, obj2)`
        - Adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

    - `Object.defineProperties(alvo, propriedades)`
        - Adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

    - `get() & set()`
        - É possível definirmos diferentes comportamentos para **get** e **set** de uma propriedade. Lembrando que ao **acionarmos uma propriedade** obj.propriedade, a função get é ativada e ao **setarmos** ob.propriedade = 'Valor' a função de set é ativada.

    - `Object.getOwnPropertyDescriptors(obj)`
        - Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

    - `Object.keys(obj)`
        - Retorna uma array com as chaves de todas as propriedades diretas e **enumeráveis** do objeto.

    - `Object.values(obj)` 
        - Retorna uma array com os valores do objeto.

    - `Object.entries(obj)`
        - Retorna uma array com array's contendo a chave e o valor.

    - `Object.getOwnPropertyNames(obj)`
        - Retorna uma array com todas as propriedades diretas do objeto enumeráveis ou não (não retorna as do protótipo).

    - `Object.getPrototypeOf(obj)`
        - Retorna o protótipo do objeto

        - É igual a Obj.prototype

    - `Object.is(obj1, obj2)`
        - Verifica se os objetos são iguais e retorna true ou false.

    - `Object.freeze()` 
        - Impede qualquer mudança nas propriedades.

        - O método `Object.freeze()` congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.

    - `Object.seal()` 
        - Previne a adição de novas propriedades e impede que as atuais sejam deletadas.

        - O método `Object.seal()` sela um Objeto, evitando que novas propriedades sejam adicionadas à ele e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).

    - `Object.preventExtensions()` 
        - Previne a adição de novas propriedades.

        - O método `Object.preventExtensions()` impede que novas propriedades sejam adicionadas a um objeto (isto é, impede futuras extensões ao objeto).

- Propriedades e métodos do protótipo
    - `{}.constructor` 
        - Retorna a função construtora do objeto.

    - `{}.hasOwnProperty(prop)`
        - Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo

        - O método `hasOwnProperty()` retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).

    - `{}.propertyIsEnumerable()`
        - Verifica se a propriedade é enumerável.

        - O método `propertyIsEnumerable()` retorna um booleano indicando quando a propriedade especificada é enumerável e é a propriedade do próprio objeto

    - `{}.isPrototypeOf(value)`
        - Verifica se é o protótipo do valor passado.

        - O `isPrototypeOf()` método de Object instâncias verifica se este objeto existe na cadeia de protótipos de outro objeto.

    - `{}.toString()`
        - Retorna o tipo do objeto. 
        
        - O problema é `toString()` ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do `Object.prototype.toString.call(valor)`.

### Arrays e Loops
- Um **array** é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável
    -   ```
            var array = [item1, item2, ...];
            array[0]; // item1
            array[1]; // item2
        ```
    - Arrays tem seus index com base zero, ou seja, o primeiro item de um array começa com o índice 0

    - A maior parte da interação feita com array é a partir de seus métodos e propriedade. Abaixo temos alguns desses métodos, mas existem vários
        - `array.pop() // remove e retorna o último item do array`

        - `array.push() // adiciona um item ao final do array`

        - `array.length // retorna o tamanho do array`  

    - Método call()
        - É comum utilizarmos o **call()** nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à **objetos que se parecem com uma Array (array-like)**.

        - HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

        - Array Like
            - Um array like é um objeto que se parece com uma array

            - Sintaxe
                -   ```
                        const arrayLike = {
                            0: 'item 1',
                            1: 'item 2',
                            2: 'item 3',
                            length: 3,
                        }
                    ```
    - Método apply()
        - O **`apply(this, [arg1, arg2, ...])`** funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

    - Método bind()
        - Diferente de call e apply, **`bind(this, arg1, arg2, ...)`** não irá executar a função mas sim retornar a mesma com o novo contexto de this. Logo, a função deve ser executada manualmente

        - Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.

        - Com o método bind() podemos passar argumentos padrões para uma função e retornar uma nova função.

- Um **loop** serve para fazer algo repetidamente até que uma condição seja atingida
    - Temos alguns tipos de loops, como o for, while e foreach. Todos fazem a mesma coisa, mas podem se sair melhor em contextos diferentes. Como por exemplo, o foreach que é mais usado para iterações com array
        -   ```
                // Esse loop irá mostrar no console a contagem de 0 até 10
                for(let i = 0; i <= 10; i++){
                    console.log(i)
                }
            ```

        - O incremento do loop não precisa de apenas de 1 em 1, pode ter o salto no valor que quisermos

        - A condição também é flexivel, variando de acordo com a necessidade do programa

        - Temos a palavra chave **break**, que quando usado dentro do loop, paralisa a execução do loop
            -   ```
                    var carros = ['gol', 'ferrari', 'fusca', 'uno', 'focus'];
                    for(let i = 0; i < carros.length; i++){
                        console.log(carros[i]);
                        if(carros[i] === 'fusca'){
                            break; // quando o item for igual a 'fusca' o loop será paralisado
                        }
                    }
                ```

        - O foreach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like - é semelhante a um array, mas não contém todos os métodos e propriedades que um array normal tem)
            - O loop forEach vai percorrer todo o array e executar uma função para cada item desse array

            - O parâmetro passado para o método forEach é uma função anonima (callback). E esse callback pode receber até 4 parâmetro, sedo eles:
                - 1º - O valor atual do elemento sendo processado no array.

                - 2º - O índice do elemento atual sendo processado no array (opcional).

                - 3º - O array que forEach() está sendo aplicado (opcional).

                - 4º - Valor a ser usado como this quando executar callback (opcional). 
            -   ```
                    var cidades = ['Itaocara', 'Aperibé', 'Cambuci', 'Santo Antônio de Pádua'];
                    cidades.forEach(function(cidade, indice, array){
                        console.log(cidade);
                        console.log(indice);
                        console.log(array);
                        console.log(this);
                    }, 'Olá, mundo!');
                ```


### Constructor Functions
- Uma constructor function em JavaScript é uma função que é usada para criar e inicializar objetos. Ela é chamada de "constructor" porque é usada para construir objetos de um tipo específico, seguindo um padrão comum. Para criar objetos usando uma constructor function, você utiliza a palavra-chave new.

- No entanto, com a introdução das classes em ES6, muitos desenvolvedores agora preferem usar classes para criar objetos em vez de constructor functions, pois as classes oferecem uma sintaxe mais clara e orientada a objetos. Mesmo assim, as constructor functions ainda são usadas e são uma parte importante da herança e da criação de objetos em JavaScript.

- O padrão de nomenclatura das funções construtoras é o pascal case, ou seja, a primeira letra em maiúsculo

- Sintaxe 
    -   ```
            function NomeFuncao(){
                this.prop = value;
                this.prop = value;
                this.prop = value;
            }

            const novaFuncao = new NomeFuncao();
            nomeFuncao.prop = value;
            nomeFuncao.prop = value;
        ```

- Exemplo
    -   ```
            function Carro() {
                this.marca = 'Marca';
                this.preco = 0;
            }

            const honda = new Carro();
            honda.marca = 'Honda';
            honda.preco = 1000;

            const fiat = new Carro();
            fiat.marca = 'Fiat';
            fiat.preco = 2000;
        ```

- A palavra chave **new** é responsável por criar um novo objeto baseado na função que passarmos a frente dela
    - Funcionamento da palavra chave **new**
        -   ```
                const honda = new Carro();

                // 1 Cria um novo objeto
                honda = {};

                // 2 Define o protótipo
                honda.prototype = Carro.prototype;

                // 3 Aponta a variável this para o objeto
                this = honda;

                // 4 Executa a função, substituindo this pelo objeto
                honda.marca = 'Marca';
                honda.preco = 0;

                // 5 Retorna o novo objeto
                return honda = {
                marca: 'Marca',
                preco: 0,
                }

            ```

- Uma forma mais eficiente de criar novo objetos a partir de uma constructor function, é passando parâmetros pra ela, e no momento da criação das nova instancias, preencher os argumentos com os valores desejados
    -   ```
            function Pessoa(parametroNome, parametroIdade, parametroCidade){
                this.nome = parametroNome;
                this.idade = parametroIdade;
                this.cidade = parametroCidade;
            }

            const pessoa1 = new Pessoa('Iago', 26, 'Itaocara');
            const pessoa2 = new Pessoa("Diani", 43, 'Aperibé');
        ```

- A palavra chave **this** faz referência ao próprio objeto construído com a Constructor Function.
    - Contudo, podemos criar variáveis dentro do constructor, sendo que essas variáveis não são visíveis para as novas instâncias desse objeto

    -   ```
            //tx e desconto não são visíveis nas novas instâncias do objeto Produto()
            function Produto(marca, nome, preco){
                const tx = 0.2;
                const desconto = preco - (preco * tx);
                this.marca = marca;
                this.nome = nome;
                this.preco = desconto;
            }

            const sabonete = new Produto('Dove', 'Dove jasmim', 4.5);
            const biscoito = new Produto("Piraque", "Piraque chocolate", 3.99);
        ```

- A propriedade **prototype** é um objeto adicionado a uma **função** quando a mesma é criada
    - A propriedade **`prototype`** em JavaScript é usada para estabelecer herança de propriedades e métodos entre objetos, criar cadeias de protótipos e acessar o construtor original de um objeto. Ela é fundamental para a programação orientada a objetos em JavaScript, permitindo que objetos compartilhem propriedades e métodos com outros objetos, economizando memória e criando estruturas de herança complexas.
 
    - A vantagem de usar o **prototype** é que os métodos e propriedades criados a partir dele, são únicos, ou seja, são criados apenas uma vez e não toda vez que o construtor for instanciado

    - Primeiro, o método ou propriedade é procurada dentro do construtor, senão existir, a procura passa pro prototype. Essa ordem é importante, caso exista o mesmo método/propriedade no construtor e no protótipo, a que será executado é o do construtor

- Construtores nativos
    - Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado

- Método do objeto vs Protótipo
    - Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo

    -   ```
            Array.prototype.slice.call(lista);
            Array.from(lista); // .from é linkado ao objeto e não ao protótipo
        ```

    - O método getOwnPropertyNames() é usado para retornar um array com os nomes de todas as **propriedades próprias (não herdadas)** de um objeto. Isso inclui propriedades enumeráveis e não enumeráveis.  

### Diferentes tipos de objetos existentes no JavaScript
- Native
    - Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host, ou seja, se eu abrir qualquer browser, esses objetos estarão lá, porque são da implementação da linguagem
        - Alguns exemplos
            - Object

            - String

            - Array

            - Function

    - Então, se eu abri o node no terminal, escrever **Object** e der enter, o retorno será o objeto nativo `Function: Object`. Contudo, se eu escrever, pode exemplo, **NodeList** e der enter, o retorno será um erro de referencia `Uncaught ReferenceError: NodeList is not defined` porque o objeto NodeList não é nativo da linguagem, ele é nativo do host(browser)

- Host
    - Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo, no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser

    - Alguns exemplos
        - NodeList

        - HTMLCollection

        - Element

- User
    - Objetos o user, são objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa

- Podemos verificar se um método ou objeto existe no JavaScript usando o **typeof** da seguinte maneira
    -   ```
            if(typeof Array.from !== "undefined")
            if(typeof NodeList !== "undefined")
        ```

    - Caso o método ou objeto não exista, cabe ao ao programador achar uma maneira de implementar o comportamento com outro código. Esse implementação de um comportamento que não existe em um ambiente, ou em versões de browser mais antigas é chamado de **polyfill**
        - Um "polyfill" é um trecho de código em JavaScript usado para adicionar funcionalidades a navegadores que não oferecem suporte nativo a essas funcionalidades, permitindo que os desenvolvedores garantam uma experiência consistente em diferentes navegadores. Polyfills preenchem lacunas de funcionalidade em navegadores mais antigos, estendendo o suporte a recursos como HTML5 e são úteis para criar sites que funcionem em diversos ambientes de navegador. Eles são frequentemente usados em conjunto com ferramentas modernas de desenvolvimento web.

### Array e interação
- forEach()
    - Sintaxe
        - `array.forEach(callback(itemAtual, index, array))`

        - A função de callback é executada para cada item da array

        - Ela possui 3 argumentos 
            - Item atual - valor do item da array

            - Index - index do valor na array

            - Array - array original (modificando qualquer item dentro desse parâmetro, a array original será modificada, porque esse argumento faz referência a array original)

        - Podemos usar **arrow function** para criar o callback do função forEach
            - Sintaxe
                - `forEach(()=>{})`

            - Quando passamos apenas um argumento, não precisamos dos parênteses. E se retornamos apenas uma linha, não precisamos das chaves 
                - `forEach(i => i.classList.add('ativa))`

- map()
    - Sintaxe 
        - `array.map(callback(itemAtual, index, array))`

        - Funciona da mesma forma que o forEach(), porém, ao invés de retornar undefined (o foreach sempre retorna undefined, então, se colocarmos o resultado do foreach dentro de uma variável, seu retorno será undefined), retorna uma nova array com valores atualizados de acordo com o return de cada iteração

        - Mas se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined

- Quando usar forEach() ou map()
    - Se o objetivo for modificar os valores do array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores

- reduce()
    - Sintaxe
        - `[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)`

    - Executa uma função de callback para cada item da array. Um valor especial existe nessa função de callback, ele é chamado de **acumulador**, mas é na verdade apenas o retorno da iteração anterior

    - Diferente do map() que retorna uma nova array, e o forEach() que retorna undefined, o reduce() um único valor, o valor da última iteração

    - Se omitirmos o **valorInicial**, o acumulador pula a primeira iteração e recebe o seu valor, ou seja, se tivermos um array com 3 itens, só haverá duas iterações

    - Passo a passo do reduce()
        - REDUCE PASSO A PASSO 1 - O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.
            -   ```
                    const aulas = [10, 25, 30];

                    // 1
                    aulas.reduce((0, 10) => {
                        return 0 + 10;
                    }, 0); // retorna 10

                    // 2
                    aulas.reduce((10, 25) => {
                        return 10 + 25;
                    }, 0); // retorna 35

                    // 3
                    aulas.reduce((35, 30) => {
                        return 35 + 30;
                    }, 0); // retorna 65
                ```

        - REDUCE PASSO A PASSO 2 - Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.
            -   ```
                    const aulas = [10, 25, 30];

                    // 1
                    aulas.reduce((10, 25) => {
                        return 10 + 25;
                    }) // retorna 35

                    // 2
                    aulas.reduce((35, 30) => {
                        return 35 + 30;
                    }) // retorna 65

                ```

- some()
    - Se pelo menos um return da iteração for truthy, ele retorna true. Ou seja, procura por pelo menos um verdadeiro

    - Sintaxe 
        - `[].some(item)`

- every()
    - Se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false. Ou seja, procura pelo primeiro false

    - Sintaxe
        - `[].every(item)`

- find() e findIndex()
    - **`[].find()`**, retorna o valor atual da primeira iteração que retornar um valor truthy. 
    
    - Já o **`[].findIndex()`**, ao invés de retornar o valor, retorna o index deste valor na array.

    - Essas funções, quando tem a condição satisfeita, paralisam a execução do código e já retornam o valor que satisfaz a condição

- filter()
    - **`[].filter()`**, retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.