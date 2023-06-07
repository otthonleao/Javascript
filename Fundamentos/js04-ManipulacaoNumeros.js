
let numberInteiro = 10
let numberFloat = 10.20

let floatToInteiro = parseInt(10.20)					// 10
let inteiroToFloat = parseFloat(10)						// 10.00 (mas nao mostra na tela)
let inteiroToFloat2 = parseFloat(10).toFixed(3)			// 10.000 (obriga mostrar na tela)
let inteiroToFloat3 = parseFloat(10).toPrecision(3)		// 10.00 (obriga mostrar na tela, mas conta o '.')
let numberToString = toString(10.005)					// "10.005"

/** BIBLIOTECA MATH */

let numeroAleatorio = Math.random()						// Gera um número aleatório
let definirNumeroAleatorio = Math.random() * 6			// Gera número 0.00 até 6.00
let naoExibirDecimal = Math.trunc(Math.random() * 8)	// Gera número 0 até 8
let arredondamento = Math.round(10.9385003)				// 10



