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