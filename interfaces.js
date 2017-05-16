"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando a " + xmen.nombre + " al cuartel");
}
;
var wolverine = {
    nombre: "Lobezno",
    poder: "regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
