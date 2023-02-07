//Async Await

/* async function puxarDados() {
  const RESPONSE_DADOS = fetch('./dados.json');//Retorna uma promise pedente a ser resolvida

  console.log(RESPONSE_DADOS);

  RESPONSE_DADOS.then(r => r.json())

  const RESPONSE_DADOS2 = await fetch('./dados.json');//Espera a promise ser resolvido, depois atribuiu o resultado da promise a variável

  console.log(RESPONSE_DADOS2);

  const JSON_DADOS = RESPONSE_DADOS
  const JSON_DADOS2 = await RESPONSE_DADOS2.json()


  console.log(JSON_DADOS);
  console.log(JSON_DADOS2);
}

puxarDados() */


//try e catch

/* async function puxarDados() {
  try {
    const RESPONSE_DADOS2 = await fetch('./dadoss.json');//Espera a promise ser resolvido, depois atribuiu o resultado da promise a variável
  
    console.log(RESPONSE_DADOS2);
  
    const JSON_DADOS2 = await RESPONSE_DADOS2.json()
  
    console.log(JSON_DADOS2);

  } catch (erro) {
    console.log(erro);
    console.log('teste');
  }
}

puxarDados() */


async function puxarDados() {
  const RESPONSE_DADOS = fetch('./dados.json');
  const RESPONSE_CLIENTE = fetch('./clientes.json');

  const JSON_DADOS = await (await RESPONSE_DADOS).json();
  const JSON_CLIENTES = await (await RESPONSE_CLIENTE).json();

  console.log(JSON_DADOS);
  console.log(JSON_CLIENTES);
}

puxarDados()