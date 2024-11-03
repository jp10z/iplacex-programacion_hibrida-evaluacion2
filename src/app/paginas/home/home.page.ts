import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonSelect,
  IonSelectOption,
  IonButtons,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
} from "@ionic/angular/standalone";
import { settingsOutline, addOutline } from "ionicons/icons";
import { CitaComponent } from "../../componentes/cita/cita.component";
import { CitasService } from "src/app/servicios/citas.service";
import { Cita } from "src/app/modelo/cita";
import { RouterModule } from "@angular/router";
import { addIcons } from "ionicons";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    IonFab,
    IonFabButton,
    RouterModule,
    IonIcon,
    IonButton,
    IonButtons,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonSelect,
    IonSelectOption,
    CitaComponent,
  ],
})
export class HomePage implements OnInit {
  // Acá se almacena la cita aleatoria obtenida.
  randomCita: Cita | null = null;

  constructor(private _citasService: CitasService) {
    // Registrar iconos.
    addIcons({
      settingsOutline,
      addOutline,
    });
  }

  async ngOnInit() {
    // Al momento de inicializar la página se llama al servicio de citas para que se inicialice.
    await this._citasService.initPlugin();
    // Obtiene una cita aleatoria desde el servicio.
    this.randomCita = await this._citasService.getRandomCita();
  }
}
