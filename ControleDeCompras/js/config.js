
/** CONFIGURANDO O VALUE DA <NAV> E DO <TITLE>
 *  Com essa função estamos mudando o nome
 *  da <nav> e do <title> de uma única vez, podendo
 *  assim deixar o no HTML em branco e mudar dinamicamente.
 */
function setConfig() {
	let texts = {
		"title":"Shopping Control"
	};
	document.title = texts.title;
	document.getElementById("navTitle").innerHTML = texts.title;
}
setConfig();