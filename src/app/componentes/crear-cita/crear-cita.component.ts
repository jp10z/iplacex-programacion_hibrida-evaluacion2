import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
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
  frase: string = "";
  autor: string = "";

  constructor() {
    addIcons({ addOutline });
  }

  ngOnInit() {}
}
