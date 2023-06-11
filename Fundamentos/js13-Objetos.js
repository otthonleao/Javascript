/**
 * OBJETOS
 * Pode ser comparado como um objeto na vida real, possui propriedades e tipos
 * Muito utilizado em todo javascript, capaz de formar estruturas complexas
 */

// FORMAS DE CRIAR UM OBEJTO
let obj = {}
let obj1 = new Object()
let objPerson = {
				name: "Otthon",
				age: 34,
				height: 1.68,
				weigth: 87
			}
// IMPRIMIR E ACESSAR OS OBJETOS
console.log(objPerson)			//{name: 'Otthon', age: 34, height: 1.68, weigth: 87}
console.log(objPerson.name)		//Otthon
console.log(objPerson['name'])	//Otthon

//ADICIONANDO PROPRIEDADES
obj1.name = "Rodrigo"
obj1['weigth'] = 80
obj1.height = 1.70
console.log(obj1)				// {name: 'Rodrigo', wigth: 80, height: 1.7}
/** Alocando uma função dentro do objeto */
obj1.getIMC = () => {
	let result = obj1.weigth / (obj1.height * obj1.height)
	return console.log("IMC ->", result)
}
console.log(obj1)				//{name: 'Rodrigo', weigth: 80, height: 1.7, getIMC: ƒ}
obj1.getIMC()					// IMC -> 27.68166089965398


/**
 * OBJETOS DENTRO DE LISTAS/ARRAY
 */
let cadastro = [{
	nome : "Otthon",
	age : 34,
}]

// Adicionar um novo campo
cadastro.push({name: "Roany", age: 25})
cadastro.push({name: "Eduardo", age: 32})
cadastro.push({name: "Allan", age: 33})

console.log(cadastro)

