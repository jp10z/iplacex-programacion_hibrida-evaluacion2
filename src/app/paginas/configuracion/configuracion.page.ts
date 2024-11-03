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
  ToggleChangeEventDetail,
  IonBackButton,
  IonButtons,
} from "@ionic/angular/standalone";
import { IonToggleCustomEvent } from "@ionic/core";
import { ConfiguracionService } from "src/app/servicios/configuracion.service";

@Component({
  selector: "app-configuracion",
  templateUrl: "./configuracion.page.html",
  styleUrls: ["./configuracion.page.scss"],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
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
  // Variable usada por el formulario (toggle).
  permitirBorrarCitasEnInicio: boolean = false;

  constructor(private _configuracionService: ConfiguracionService) {}

  async ngOnInit() {
    // Carga las configuraciones desde el servicio y la setea en la variable.
    this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    // Obtiene el valor de las configuraciones al momento de entrar a la página.
    this.permitirBorrarCitasEnInicio =
      await this._configuracionService.permitirBorrarCitasEnInicio();
  }

  onPermitirBorrarCitasEnInicioChange(
    $event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>
  ) {
    // Función que se llama cuándo se cambia el valor del toggle.
    // Esta llama al servicio de configuración para que setee el valor actual y lo guarde.
    this._configuracionService.setPermitirBorrarCitasEnInicio(
      this.permitirBorrarCitasEnInicio
    );
  }
}
