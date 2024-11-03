import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { CrearCitaComponent } from "../../componentes/crear-cita/crear-cita.component";
import { ListaCitasComponent } from "../../componentes/lista-citas/lista-citas.component";

@Component({
  selector: "app-gestion",
  templateUrl: "./gestion.page.html",
  styleUrls: ["./gestion.page.scss"],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CrearCitaComponent,
    ListaCitasComponent,
  ],
})
export class GestionPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
