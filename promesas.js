"use strict";
/*
* Nos ayuda a ejecutar un código o tarea
* cuando una tarea asyncrona es terminada
*/
/*
*Pide dos argumentos
* Resolve, la funcion que usaremos si la promesa funciona correctamente
* Reject, si la función promise falla
*/
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Proesa terminada");
        reject();
    }, 10000);
});
console.log("Paso 1");
promesa.then(function () {
    console.log("Ejecutarme cuando se termine bien");
}, function () {
    console.log("Ejecutarme cuando todo sale mal");
});
console.log("Paso 2");
