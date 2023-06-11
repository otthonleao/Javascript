/**
 * ARROW FUNCTION
 * A diferença é na estrutura com alterações técnicas na forma de lhe dar com os
 * valores.
 * Na função normal, nós temos um escopo específico que funciona dentro da função.
 * Na Arrow Function, nós temos um escopo léxico, onde podemos capturar valores
 * de qualquer valor que estejamos envolvidos.
 * 		() => {
 * 			escopo da função com o 'this' léxico
 * 		}
 */

let soma = (n1, n2 = 5) => {
	console.log(n1 + n2)
}
soma(5)
soma(5, 10)


function person() {
	this.age = 21
	console.log(this.age)
	setTimeout(() => {
		this.age++ // Se fosse uma função normal esse this não conseguiria ver o this.age que está no escopo acima.
		console.log(this.age)
	}, 2000)
}

const a = new person();