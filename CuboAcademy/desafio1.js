

function solucao(altitude) {

	if(altitude >= 0 && altitude <= 20) {
		return "TROPOSFERA";
	} else if (altitude >= 21 && altitude <= 50) {
		return "ESTRATOSFERA";
	} else if (altitude >= 51 && altitude <= 80) {
		return "MESOSFERA";
	} else if (altitude >= 81 && altitude <= 450) {
		return "TERMOSFERA";
	} else {
		return "EXOSFERA";
	}
}

solucao(15);