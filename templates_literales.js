"use strict";
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto = "Hola, "+nombre+" "+apellido+" "+edad;
var texto = "Hola\n" + nombre + "\n" + apellido + "\n" + edad;
var texto2 = 1 + 2 + "\n" + getNombre();
console.log(texto2);
function getNombre() {
    return "Patricio";
}
