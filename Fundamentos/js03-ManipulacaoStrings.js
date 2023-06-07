
let nome = "Otthon"
let sobrenome = "Leao"
let idade = 34

console.log(nome.toUpperCase())			// Tudo Maiúsculo: OTTHON
console.log(sobrenome.toLowerCase())	// Tudo Minúsculo: leao
console.log(nome.replace("t", "a"))		// Modifica a primeira letra: OATHON

/** CONCATENAÇÃO */
nome.concat(sobrenome)					// OTTHONLEAO
nome.concat(" ").concat(sobrenome)		// OTTHON LEAO
nome.concat(idade)						// "OTTHON34"
let fullname = nome + sobrenome			// OTTHONLEAO
fullname = nome + " " + sobrenome		// OTTHON LEAO

/** TRANSFORMAÇÃO DE TIPO */
idade.toString()						// "34"

