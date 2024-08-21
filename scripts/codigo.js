
function Perro(arg1,arg2,arg3){
    this.nombre = arg1;
    this.raza = arg2;
    this.color = arg3;
    this.ladrar = function(){
        return `Guau me llamo ${this.nombre}`;
    }
}
const perrito1 = new Perro("Juanito","Mestizo","cafe");
const perrito2 = new Perro("Morris","Mestizo","Negro");

console.log(perrito1.ladrar());
console.log(perrito2.ladrar());

//OBJETO NATIVO DE JAVA SCRIPT

const hoy = new Date();
console.log(hoy.getFullYear());
