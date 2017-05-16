class Avenger{

  nombre : string;
  nombreReal : string;
  equipo : string;

  puedePelear:boolean;
  peleasGanadas:number;

  constructor(nombre:string,equipo:string,nombreReal:string){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
    this.peleasGanadas = 0;
  }

}

let antman : Avenger = new Avenger("Iron Man","Iron Man","Tony");

console.log(antman)
