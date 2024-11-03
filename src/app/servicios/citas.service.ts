import { Injectable } from "@angular/core";
import { Cita } from "../modelo/cita";

@Injectable({
  providedIn: "root",
})
export class CitasService {
  // almacenamiento temporal en memoria
  private _citas: Cita[] = [
    new Cita(
      "La forma de empezar es dejar de hablar y empezar a hacer.",
      "Walt-Disney"
    ),
    new Cita(
      "La vida es lo que sucede cuando estás ocupado haciendo otros planes.",
      "John Lennon"
    ),
    new Cita(
      "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
      "Eleanor Roosevelt"
    ),
    new Cita(
      "Dime y lo olvido. Enséñame y lo recuerdo. Involucrarme y aprendo.",
      "Benjamin Franklin"
    ),
    new Cita(
      "Si juzgas a las personas, no tienes tiempo para amarlas.",
      "Madre Teresa"
    ),
  ];

  constructor() {}

  addCita(frase: string, autor: string) {
    this._citas.push(new Cita(frase, autor));
  }

  getCitas() {
    return this._citas;
  }

  getRandomCita() {
    // Obtiene un numero aleatorio según el largo del array de citas
    const randomIndex = Math.floor(Math.random() * this._citas.length);
    console.log("RandomIndex", randomIndex);
    // Returna el elemento en esa posición
    return this._citas[randomIndex];
  }
}
