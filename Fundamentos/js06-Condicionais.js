/**
 * IF e ELSE
 */

let n1 = parseInt(prompt("Insira o primeiro número:"))
let n2 = parseInt(prompt("Insira o segundo número"))
let operador = prompt("Qual operação deseja?")
let result;

if (operador == '+') {
	result = n1 + n2
	console.log(result)
} else if (operador == '-') {
	result = n1 - n2
	console.log(result)
} else if (operador == '*') {
	result = n1 * n2
	console.log(result)
} else if (operador == '/') {
	result = n1 / n2
	console.log(result)
} else {
	console.error("OPERATOR NOT FOUND")
}

/**
 * SWITCH
 */

switch(operador) {
	case "+": 
		result = n1 + n2
		console.log(result)
	break

	case "-":
		result = n1 - n2
		console.log(result)
	break

	case "*":
		result = n1 * n2
		console.log(result)
	break

	case "/":
		result = n1 / n2
		console.log(result)
	break

	default:
		console.error("OPERATOR NOT FOUND")
}

