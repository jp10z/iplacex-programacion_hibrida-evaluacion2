import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonLabel,
  IonList,
  IonItem,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-configuracion",
  templateUrl: "./configuracion.page.html",
  styleUrls: ["./configuracion.page.scss"],
  standalone: true,
  imports: [
    IonItem,
    IonList,
    IonLabel,
    IonToggle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonToggle,
  ],
})
export class ConfiguracionPage implements OnInit {
  permitirBorrarCitasEnInicio: boolean = false;

  constructor() {}

  ngOnInit() {}
}
