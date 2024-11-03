import { Component, EventEmitter, OnInit, Output } from "@angular/core";
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
import { Cita } from "src/app/modelo/cita";
import { CitasService } from "src/app/servicios/citas.service";

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
  citas: Cita[] = [];

  constructor(private _citasService: CitasService) {}

  async ngOnInit() {
    await this._citasService.initPlugin();
    await this.loadCitas();
  }

  async loadCitas() {
    // Función que carga el listado de citas desde el servicio
    this.citas = await this._citasService.getCitas();
  }

  onCitasChange() {
    // Función llamada cuándo algún hijo emita un evento de creación o eliminación de citas.
    // Esto recargará el listado de citas desde el servicio.
    this.loadCitas();
  }
}
