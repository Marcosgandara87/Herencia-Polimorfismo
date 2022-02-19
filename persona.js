export default class persona {
    
    apellido;
    nombre;
    dni;
    
  


	filtroPersonas(valor){
			console.log(valor)
			
			var expresion = new RegExp(valor,"i");
			
			if (expresion.test(this.nombre)){
			console.log("Esta la letra")
			
		}
		}










}