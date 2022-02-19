
import clientes from "./clientes.js";
import empleados from "./empleados.js";



    export default class cuenta{ 
        
        #idCliente;
        numero;
        #saldo;
        //el error es para cada instacia de clase y se reinician
        error = 2; 
        //para contar la cantidad de cuentas
        static cantidad = 0;
        static numero = 1;

        set idCliente(valor){
            if((valor instanceof empleados) || (valor instanceof clientes)) 
            this.#idCliente = valor;
        }
    
        get idCliente(){
            return this.#idCliente
        }
    
    
        constructor(idCliente){
            
            
            this.idCliente = idCliente;
            this.#saldo = 0;
            //con el nombre de la clase lo llamas para sumar y queda guardado
            
        }
    
        depositosenCta(valor){
            
            if ((valor > 0) && (this.error > 1)) {
            this.#saldo += valor;
            }else{
            console.log("Importe incorrecto")		
            this.error = 0;
    
            }
        
        }
    
        _retiroenCta(valor,comision){
            const ganancia = valor *(comision/100)
            valor = valor *(1+comision/100);
            console.log(ganancia)
            if ((valor <=  this.#saldo) && (this.error > 1)) {
            if  ((valor > 0)&& (this.error > 1)){
            this.#saldo -= valor;
            
            }else {
            console.log("Importe incorrecto negativo")		
            this.error = 0;
            }		
            }else{
            console.log("Saldo en cuenta insuficienta")
            this.error = 0;
            }
    
        }
    
    
        transfererDinero(valor,ctadestino){
            if(this.error >1){
            this.retiroenCta(valor);
            }
            if(this.error >1){
            ctadestino.depositosenCta(valor);
            }	
        }
    
        consultaSaldo (){
            console.log(this.#saldo)
            return this.#saldo

        }
    
    }






