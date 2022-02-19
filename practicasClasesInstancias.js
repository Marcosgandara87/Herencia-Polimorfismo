
import clientes from "./clientes.js";
import ctaCte from "./cuentasCte.js";
import cajaAhorro from "./cajaAhorro.js";
import empleados from "./empleados.js";

const clie1 = new clientes("Gandara","Marcos", 35216493);
const clie1Ctacte = new ctaCte(clie1);
clie1Ctacte.depositosenCta(1000);

const clie2 = new clientes("Gandara","Mariano",40123123);
const clie2Ctacte = new ctaCte(clie2);
clie2Ctacte.depositosenCta(900);

console.log(clie1Ctacte)
console.log(clie2Ctacte)

clie1Ctacte.consultaSaldo()
clie2Ctacte.consultaSaldo()

clie1Ctacte.transfererDinero(800,clie2Ctacte);

clie1Ctacte.consultaSaldo()
clie2Ctacte.consultaSaldo()


clie1.filtroClientes("M")

const clie1CA = new cajaAhorro (clie1);
clie1CA.depositosenCta(100);

clie1CA.consultaSaldo();
console.log(clie1CA);


const clie2CA = new cajaAhorro (clie2);
clie1CA.transfererDinero(20,clie2CA)

clie1CA.consultaSaldo();
clie2CA.consultaSaldo();

const empleado1 = new empleados ("Gandara","Aldo", 18773123,"gerente")   
console.log(empleado1)

const clie3Ctacte = new ctaCte(empleado1);
console.log(clie3Ctacte);







