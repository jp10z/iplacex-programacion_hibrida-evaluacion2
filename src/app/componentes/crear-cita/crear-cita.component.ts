import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  IonCardHeader,
  IonCardSubtitle,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonIcon,
  IonText,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { addOutline } from "ionicons/icons";
import { CitasService } from "src/app/servicios/citas.service";

@Component({
  selector: "app-crear-cita",
  templateUrl: "./crear-cita.component.html",
  styleUrls: ["./crear-cita.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonText,
    IonIcon,
    IonList,
    IonButton,
    IonInput,
    IonItem,
    IonCardHeader,
    IonCardSubtitle,
    IonCard,
    IonCardTitle,
    IonCardContent,
  ],
})
export class CrearCitaComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCitaCreadaEvent = new EventEmitter();

  frase: string = "";
  autor: string = "";

  constructor(private _citasService: CitasService) {
    addIcons({ addOutline });
  }

  ngOnInit() {}

  addCita() {
    this._citasService.addCita(this.frase, this.autor);
    this.onCitaCreadaEvent.emit();
  }
}
