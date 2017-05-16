"use strict";
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.peleasGanadas = 0;
    }
    return Avenger;
}());
var antman = new Avenger("Iron Man", "Iron Man", "Tony");
console.log(antman);
