/**
 * FUNÇÕES SÍNCRONAS
 * É a função que deve ser executada e retornar (ou não) valor de forma
 * sincronizada, mantendo uma ordem bem definida. Ou seja, eu executo a 
 * função e ela retorna um valor.
 * A estrutura tem começo e fim bem definidos. Os exemplos dessas funções
 * são os dos arquivos 08 e 09.
 */

/**
 * FUNÇÕES ASSÍNCRONAS
 * São funções que permitem ao desenvolvedor executá-la porém somente após
 * todo o seu processamento o resultado é enviado como retorno.
 * Não existe uma ordem sincronizada e é baseada em "eventos"
 * Quando a função assíncrona é disparada, ela funciona em paralelo a execução
 * do resto do script do programa e quando a função termina o seu processamento
 * ela envia o evento com o resultado.
 * São utilizadas em projetos que precisam de performasse ou escalabilidade
 */

// Função que quando disparada só começa a executar o corpo após o tempo definino, nesse caso em 2s. Isso se chama 'callback' que é quando eu quero esperar o retorno de algo.
console.log("Início da execução")

setTimeout(function() {
	console.log("\nHello from async function")
}, 2000);

console.log("\nPrograma executando")
console.log("em paralelo")
console.log("enquanto a função")
console.log("também está sendo executada\n")

// 
console.log("Início da execução 2")
function callbackFunction(string) {
	console.log('Hello Async 2', string)
}

setTimeout(callbackFunction, 3000, 'Olá, Mundo!');

/** UTILIZAÇÃO COMUM
 * As funções Async são utilizadas constantementes nas Requisições AJAX (que
 * é quando o cliente manda uma requisição para o servidor backend)
 */
