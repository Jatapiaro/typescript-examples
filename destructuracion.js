"use strict";
var avenger = {
    nombres: "Tony",
    clave: "Iron Man",
    poder: "La esa madre del pecho"
};
/*let nombres = avenger.nombres;
let clave = avenger.clave;
let poder = avenger.poder*/
//nombres:cariño le da un nuevo alias
var cariño = avenger.nombres, poder = avenger.poder, clave = avenger.clave;
console.log(cariño, clave, poder);
///////
var avengers = ["Thor", "America", "Hulk"];
/*
let [thor,capi,verde] = avengers;
console.log(thor,capi,verde);
*/
var verde = avengers[2];
console.log(verde);
