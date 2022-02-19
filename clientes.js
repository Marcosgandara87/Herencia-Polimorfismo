import persona from "./persona.js";

export default class clientes extends persona {
	idCliente;
	static idCliente = 1;




	constructor(apellido,nombre,dni){
		super();
		this.idCliente = clientes.idCliente ++;
		this.apellido = apellido
		this.nombre = nombre;
		this.dni = dni;
		
	}



	filtroClientes(valor){
			console.log(valor)
			
			var expresion = new RegExp(valor,"i");
			
			if (expresion.test(this.nombre)){
			console.log("Esta la letra")
			
		}
		}


	
}