import persona from "./persona.js";

export default class empleados extends persona {
	idEmpleado;
	static idEmpleado = 1;
    puesto;



	constructor(apellido,nombre,dni,puesto){
		super();
		this.idEmpleado = empleados.idEmpleado ++;
		this.apellido = apellido
		this.nombre = nombre;
		this.dni = dni;
		this.puesto = puesto
	}



	filtroEmpleados(valor){
			console.log(valor)
			
			var expresion = new RegExp(valor,"i");
			
			if (expresion.test(this.nombre)){
			console.log("Esta la letra")
			
		}
		}


	
}