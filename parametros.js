"use strict";
/*
* quien, espera obligatoriamente un string
* objeto, parametro por defecto con valor de batiseñal
* momento, parametro opcional, si no se envia aparece como undefined(se usa '?')
* todos los obligatorios deben delcararse al principio
*/
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = 'batiseñal'; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo " + objeto;
    }
    console.log(mensaje);
}
activar("Jacobo");
activar("Jacobo", "Saludo", "Noche");
