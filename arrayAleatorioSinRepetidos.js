var numeros = [];
var input = document.querySelector("input");
input.focus();

	
function aleaotrio(){
return ( Math.round(Math.random()*100))

}


function cargaArray(numero){

var numeros = [];
var contador = 1;

	while (contador <= numero){
		var ale = aleaotrio();
		console.log(ale);
		var repe = false;
	
		
		for(var i = 0; i < numero; i++){
			if (ale == numeros[i]){	
			repe = true;
			break;
			}				
		}
		
		if (repe ==false){
		numeros.push(ale);
		contador = contador +1;
		}
		
		
	}
		return numeros;


}

numeros = cargaArray(7)
console.log(numeros);
