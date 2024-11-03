import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
  IonToast,
} from "@ionic/angular/standalone";
import { Cita } from "src/app/modelo/cita";
import { CitasService } from "src/app/servicios/citas.service";
import { addIcons } from "ionicons";
import { trashOutline } from "ionicons/icons";
import { ListaCitasItemComponent } from "../lista-citas-item/lista-citas-item.component";

@Component({
  selector: "app-lista-citas",
  templateUrl: "./lista-citas.component.html",
  styleUrls: ["./lista-citas.component.scss"],
  standalone: true,
  imports: [
    IonToast,
    IonIcon,
    CommonModule,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    ListaCitasItemComponent,
  ],
})
export class ListaCitasComponent {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCitaEliminadaEvent = new EventEmitter();
  @Input() citas: Cita[] = [];

  constructor(private _citasService: CitasService) {
    // Registrar iconos
    addIcons({ trashOutline });
  }

  onCitaEliminada(): void {
    // Función que se llama cuándo un componente item hijo ejecuta una eliminación.
    // Esta en cadena hace otra emisión para que la página padre recargue el listado de citas.
    this.onCitaEliminadaEvent.emit();
  }
}
