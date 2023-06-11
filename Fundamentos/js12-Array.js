/**
 * ARRAY
 * É uma estrutura de dados que armazena uma lista (coleção de dados) de elementos
 * de tal forma que cada um é identificado por meio de um índice que começa em 0.
 */

// FORMAS DE INICIAR UMA LISTA/ARRAY
let arr = []
let arr1 = ["Otthon", "Roany", "Eduardo", "Allan", "Aline"]
let arr2 = new Array()

// ALOCANDO DADOS NO ARRAY
arr2[0] = "Otthon"
arr2[1] = "Roany"
arr2[2] = "Eduardo"
arr2[3] = "Allan"
arr2[4] = "Aline"

// LENDO OS ARRAYS POR INDEX
console.log("Elemento na posição [", 0,"] da lista arr1:", arr1[0])
console.log("Elemento na posição [", 2,"] da lista arr1:", arr1[2])
console.log("Elemento na posição [", 4,"] da lista arr1:", arr1[4])
console.log("\nElemento na posição [", 0,"] da lista arr2: ",arr2[0])
console.log("Elemento na posição [", 2,"] da lista arr2: ",arr2[2])
console.log("Elemento na posição [", 4,"] da lista arr2: ",arr2[4])

// LENDO TODO O ARRAY POR FOR
console.log("\n<--- USANDO O FOR --->")

for (let i = 0; i < arr1.length; i++) {
	console.log("\nLista arr1 - index[",i,"] : ", arr1[i])
}
console.log("\n")

// LENDO TODO O ARRAY POR FOR EACH
// FOR EACH USA O CALLBACK, MAS NÃO É ASSÍNCRONO
console.log("\n<--- USANDO O FOR EACH--->")
arr2.forEach((valor, index) => {
	console.log("Lista arr2 - index[",index,"] : ", valor)
})

// REMOVENDO VALOR POR INDEX
console.log("\n<--- USANDO O FOR EACH PARA REMOVER --->")
arr1.forEach((valor, index) => {
	if(index == 1) {
		arr1[index] = ""
	}
})
console.log("Removeu o 'Eduardo' na Lista arr1", arr1)

// MÉTODOS PARA FACILITAR
console.log("\n<--- MÉTODOS QUE FACILITAM --->")
arr.push("Fernando")	// adiciona valor na ultima posição
arr.push("Ronie")
arr.unshift("Izis")		// adiciona o valor alocando na primeira posição
arr.unshift("Genir")	

console.log(arr)	// ['Genir', 'Izis', 'Fernando', 'Ronie']

arr.forEach((valor, index) => {
	console.log(arr[index])
})

arr.pop()	// Remover e retornar o ultimo elemento ['Genir', 'Izis', 'Fernando']
console.log(arr)
arr.shift()	// Remover e retornar o primeiro elemento ['Izis', 'Fernando']

console.log(arr)

let unindoArrComArr1 = arr.concat(arr1)