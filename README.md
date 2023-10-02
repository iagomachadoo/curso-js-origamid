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

