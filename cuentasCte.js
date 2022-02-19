import clientes from "./clientes.js";
import cuenta from "./cuenta.js";



export default class ctaCte extends cuenta {
	
	//para contar la cantidad de cuentas
	static cantidad = 0;
	static numeroCtaCte = 1;
	
	
	constructor(idCliente){
		super(idCliente);
		this.numero = ctaCte.numero ++;
		//con el nombre de la clase lo llamas para sumar y queda guardado
		ctaCte.cantidad ++;
	}
	retiroenCta (valor){
		super._retiroenCta(valor, 5);


	}

	
}