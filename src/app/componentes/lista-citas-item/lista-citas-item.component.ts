import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IonButton, IonIcon, IonItem } from "@ionic/angular/standalone";
import { CitasService } from "src/app/servicios/citas.service";

@Component({
  selector: "app-lista-citas-item",
  templateUrl: "./lista-citas-item.component.html",
  styleUrls: ["./lista-citas-item.component.scss"],
  standalone: true,
  imports: [IonItem, IonButton, IonIcon],
})
export class ListaCitasItemComponent {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCitaEliminadaEvent = new EventEmitter();

  // Inputs de entrada.
  @Input() id: number = -1;
  @Input() frase: string = "";
  @Input() autor: string = "";

  constructor(private _citasService: CitasService) {}

  async deleteCita(): Promise<void> {
    // Llama al servicio para que elimina la cita actual.
    await this._citasService.deleteCita(this.id);
    // Se emite señal al padre para indicarle que se hizo una eliminación.
    this.onCitaEliminadaEvent.emit();
  }
}
