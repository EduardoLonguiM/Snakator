// Função para gerar uma lista com todos os números de 6 dígitos possíveis
function gerarNumeros() {
  // Inicializa uma lista vazia
  let numeros = [];

  // Percorre todos os números de 1 a 999999
  for (let i = 1; i <= 999999; i++) {
    // Converte o número para uma string de 6 dígitos com zeros à esquerda
    let numero = i.toString().padStart(6, "0");

    // Verifica se o número é único, ou seja, não tem dígitos repetidos
    let unico = true;
    for (let j = 0; j < 6; j++) {
      for (let k = j + 1; k < 6; k++) {
        if (numero[j] == numero[k]) {
          unico = false;
          break;
        }
      }
      if (!unico) {
        break;
      }
    }

    // Se o número for único, adiciona na lista
    if (unico) {
      numeros.push(numero);
    }
  }

  // Retorna a lista
  return numeros;
}

// Função para gerar uma lista finita com todos os resultados possíveis de 11 dígitos
function gerarLista() {
  // Inicializa a lista com os 5 primeiros dígitos 67993
  let lista = [];

  // Obtém a lista com todos os números de 6 dígitos possíveis
  let numeros = gerarNumeros();

  // Percorre a lista de números
  for (let i = 0; i < numeros.length; i++) {
    // Concatena os 5 primeiros dígitos 67993 com o número de 6 dígitos
    let resultado = "67993" + numeros[i];

    // Adiciona o resultado na lista
    lista.push(resultado);
  }

  // Ordena a lista em ordem crescente
  lista.sort();

  // Retorna a lista
  return lista;
}

// Chama a função e imprime o resultado
console.log(gerarLista());
