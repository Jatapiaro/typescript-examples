
let avenger = {
  nombres : "Tony",
  clave: "Iron Man",
  poder: "La esa madre del pecho"
}

/*let nombres = avenger.nombres;
let clave = avenger.clave;
let poder = avenger.poder*/

//nombres:cariño le da un nuevo alias
let {nombres:cariño,poder,clave} = avenger;

console.log(cariño,clave,poder)

///////


let avengers:string[] = ["Thor","America","Hulk"];

/*
let [thor,capi,verde] = avengers;
console.log(thor,capi,verde);
*/

let [,,verde] = avengers;
console.log(verde);
