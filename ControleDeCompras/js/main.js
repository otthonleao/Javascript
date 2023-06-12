
let list = [
	{ "desc":"rice", "amount":"1", "value":"5.40" },
	{ "desc":"beer", "amount":"12", "value":"1.99" },
	{ "desc":"meat", "amount":"1", "value":"15.00" }
];

function getTotal(list) {
	let total = 0;
	for (let key in list) {
		total += list[key].value * list[key].amount;
	}
	document.getElementById("total-value").innerHTML = formatValue(total);
}

function setList(list) {
	let table = `<thead>
			 		 <tr>
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Value</th>
						<th scope="col">Action</th>
			  		</tr>
				</thead>
				<tbody>`
	
	for (let key in list) {
		table += `<tr>
					<td>${formatDesc(list[key].desc)}</td>
					<td>${formatAmount(list[key].amount)}</td>
					<td>${formatValue(list[key].value)}</td>
					<td>
						<button id="btn-edit" class="btn btn-default" onclick="setUpdate(${key})">EDIT</button>

						<button id="btn-delete" class="btn btn-default" onclick="deleteData(${key})">DELETE</button> </td>
				  </tr>`;
	}

	table += '</tbody>';
	document.getElementById("list-table").innerHTML = table;
	getTotal(list);
	saveListStorage(list);
}

/** FORMATAÇÃO DAS STRINGS EXIBIDAS NA TELA */
//Função que deixa a primeira letra maiúscula
function formatDesc(desc) {
	let str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//Função para transformar as entradas em Integer
function formatAmount(amount) {
	return parseInt(amount);
}

//Função para incluir o $ e mudar o separador decimal
function formatValue(value) {
	let str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = "$ " + str;
	return str;
}

function validation() {
	let desc = document.getElementById("desc").value;
	let amount = document.getElementById("amount").value;
	let value = document.getElementById("value").value;
	let errors = "";
	document.getElementById("errors").style.display = "none";

	if(desc === "") {
		errors += `<p>Fill out a description</p>`;
	}

	if(amount === "") {
		errors += `<p>Fill out a quantity</p>`;
	} else if (amount != parseInt(amount)) {
		errors += `<p>Fill out a valid amount</p>`;
		document.getElementById("amount").value = "";
	}

	if(value === "") {
		errors += `<p>Fill out a value</p>`;
	} else if (value != parseFloat(value)) {
		errors += `<p>Fill out a valid value</p>`;
		document.getElementById("value").value = "";
	}

	if(errors != "") {
		document.getElementById("errors").style.display = "block";
		document.getElementById("errors").innerHTML = `<h3>Error: ${errors}</h3>`;
		document.getElementById("errors").style.backgroundColor = "red";
		return 1
	} else {
		return 0
	}
}


function addData() {

	if(validation() == 1) {
		return;
	} else {
		let desc = document.getElementById("desc").value;
		let amount = document.getElementById("amount").value;
		let value = document.getElementById("value").value;

		list.unshift({"desc":desc, "amount":amount, "value":value})
		resetForm();
		setList(list);
	}

	
}

/** QUANDO CLICAR NO EDIT OS VALORES VÃO PARA OS CAMPOS */
function setUpdate(id) {
	let obj = list[id];
	document.getElementById("desc").value = obj.desc;
	document.getElementById("amount").value = obj.amount;
	document.getElementById("value").value = obj.value;
	//Trocando os botões na view
	document.getElementById("btn-update").style.display = "inline-block"
	document.getElementById("btn-add").style.display = "none"
	//Salvando o id da linha que estamos editando
	document.getElementById("input-id-update").innerHTML = `<input type="hidden" id="id-update" value="${id}">`
}

function updateData() {

	if(validation() == 1) {
		return;
	}

	let id = document.getElementById("id-update").value;
	let desc = document.getElementById("desc").value;
	let amount = document.getElementById("amount").value;
	let value = document.getElementById("value").value;

	list[id] = {"desc":desc, "amount":amount, "value":value};
	resetForm();
	setList(list);
}

function resetForm() {
	document.getElementById("desc").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";
	document.getElementById("input-id-update").innerHTML = "";
	//Trocando os botões na view
	document.getElementById("btn-update").style.display = "none"
	document.getElementById("btn-add").style.display = "inline-block"
	//View Campo de Error
	document.getElementById("errors").style.display = "none";
}

function deleteData(id) {
	if(confirm("Delete this item?")) {
		if(id === list.length - 1) {	//Deletar a última linha
			list.pop();
		} else if(id === 0) {			//Deletar a primeira linha
			list.shift();
		} else {
			//Pega a posição até uma posição antes do id que quero deletar
			let arrAuxIni = list.slice(0, id);
			//Pega uma posição a frente do id que quero deletar em diante
			let arrAuxEnd = list.slice(id + 1);
			//Concateno as variáveis que contém as duas listas armazenadas
			list = arrAuxIni.concat(arrAuxEnd);
		}
		setList(list);
	}
}

function deleteList() {
	if(confirm("Delete this list?")) {
		list = [];
		setList(list);
	}
}

function saveListStorage(list) {
	let jsonStr = JSON.stringify(list);
	localStorage.setItem("list", jsonStr);
}

function initListStorage() {
	let testList = localStorage.getItem("list");
	if(testList) {
		list = JSON.parse(testList);
	}
	setList(list);
}

initListStorage()
