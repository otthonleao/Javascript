/** 
 * Função são subprogramas que podem ser definidos e chamados a qualquer momento
 * quando há necessidade.
 */

/**
 * FUNÇÃO COM PROCEDIMENTO
 * Quando não retorna nada somente executa o output
 */
function sayHello() {
	console.log("Hello from 'seyHello()' function")
}
let funcaoComProcedimento = sayHello();
console.log("Função COM procedimento: " + funcaoComProcedimento); // undefined

/**
 * FUNÇÃO SEM PROCEDIMENTO (return)
 * Quando eu quero além de executar uma tarefa, retornar algum valor/resultado
 */
let number = 2;
function square () {
	return number * number;
}
let funcaoSemProcedimento = square();
console.log("Função SEM procedimento: " + funcaoSemProcedimento); // 4

/**
 * FUNÇÃO PARAMETRIZADA 
 * Quando recebemos valores/argumentos nos parâmetros 
 */
function soma(number1, number2) {
	return number1 + number2;
}
let resultadoSoma = soma(5,5);
console.log("A soma da Função Parametrizada é: " + resultadoSoma);
