/*
* Los ejemplos de abajo funcionan perfectamente
* y hacen lo mismo. Ahora supongamos que tenemos
* un objeto (hulk)
*/
let nombre = "Peter";

/*
*Con funciones de flecha, el this
*no se afecta cuando se ejectua dentro de otra funcion
*/
let hulk = {
  nombre: "Bruce",
  smash(){
    setTimeout( ()=>console.log(this.nombre+" smash"){
    },1500)
  }
}

hulk.smash();

/*
*Ahora supongamos que hulk tarda en
* responder cuando se le da un smash
*/


/*
let miFuncion = function(a){
  return a;
}*/

/*
*Recibe como argumento a
*y retorna a.
*Es igual que la funcion de arriba
*/

/*
let miFuncionF = a => a


console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));

let miFuncion2 = function(a:number,b:number){
  return a+b;
}

let miFuncion2F = (a:number,b:number) => a+b;

console.log(miFuncion2(4,5));
console.log(miFuncion2F(4,5));

let miFuncion3 = function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFuncion3F = (nombre:string) => {
  nombre = nombre.toUpperCase();
  return nombre;
}

console.log(miFuncion3("Jacobo"));
console.log(miFuncion3F("Jacobo"));
*/
