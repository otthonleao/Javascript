/**
 *  FUNÇÃO RECURSIVA
 * 
 *  Ato de executar uma chamada de um método dentro dele mesmo.
 *  Para exemplificar utilizaremos uma função programada para calcular
 *  o fatorial de um número.
 */

function fatorial(number) {
	if (number === 1) {
		return 1;
	} else {
		return number * fatorial(number - 1);
	}
}

let resultado = fatorial(5);
console.log("Resultado ->", resultado);