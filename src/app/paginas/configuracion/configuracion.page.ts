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
} from "@ionic/angular/standalone";
import { IonToggleCustomEvent } from "@ionic/core";
import { ConfiguracionService } from "src/app/servicios/configuracion.service";

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

  constructor(private _configuracionService: ConfiguracionService) {}

  async ngOnInit() {
    this.permitirBorrarCitasEnInicio =
      await this._configuracionService.permitirBorrarCitasEnInicio();
  }

  onPermitirBorrarCitasEnInicioChange(
    $event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>
  ) {
    this._configuracionService.setPermitirBorrarCitasEnInicio(
      this.permitirBorrarCitasEnInicio
    );
  }
}
