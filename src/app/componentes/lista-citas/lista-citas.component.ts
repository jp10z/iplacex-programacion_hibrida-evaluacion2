import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import {
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
} from "@ionic/angular/standalone";
import { Cita } from "src/app/modelo/cita";
import { CitasService } from "src/app/servicios/citas.service";
import { addIcons } from "ionicons";
import { trashOutline } from "ionicons/icons";

@Component({
  selector: "app-lista-citas",
  templateUrl: "./lista-citas.component.html",
  styleUrls: ["./lista-citas.component.scss"],
  standalone: true,
  imports: [IonIcon, CommonModule, IonItem, IonLabel, IonList, IonButton],
})
export class ListaCitasComponent implements OnInit {
  @Input() citas: Cita[] = [];

  constructor(private _citasService: CitasService) {
    addIcons({ trashOutline });
  }

  ngOnInit() {}
}
