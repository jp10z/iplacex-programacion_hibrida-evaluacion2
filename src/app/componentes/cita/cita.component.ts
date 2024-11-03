import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-cita",
  templateUrl: "./cita.component.html",
  styleUrls: ["./cita.component.scss"],
  standalone: true,
  imports: [
    IonCardHeader,
    IonCardSubtitle,
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
  ],
})
export class CitaComponent implements OnInit {
  // Inputs del componente
  @Input() frase: string = "";
  @Input() autor: string = "";

  constructor() {}

  ngOnInit() {
    console.log("Component cita ngOnInit");
  }
}
