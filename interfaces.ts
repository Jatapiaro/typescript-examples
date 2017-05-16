interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision(xmen : Xmen){
  console.log("Enviando a: "+xmen.nombre);
};

function enviarCuartel(xmen : Xmen){
  console.log("Enviando a "+xmen.nombre+" al cuartel");
};

let wolverine:Xmen = {
  nombre: "Lobezno",
  poder: "regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);
