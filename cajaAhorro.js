import clientes from "./clientes.js";
import cuenta from "./cuenta.js";

export default class cajaAhorro extends cuenta{

	//para contar la cantidad de cuentas
	static cantidad = 0;
	static numero = 1;
	
	
	constructor(idCliente){
		super(idCliente);
		this.numero = cajaAhorro.numero ++;
		//con el nombre de la clase lo llamas para sumar y queda guardado
		cajaAhorro.cantidad ++;
	}

    retiroenCta (valor){
		super._retiroenCta(valor, 2);


	}


}