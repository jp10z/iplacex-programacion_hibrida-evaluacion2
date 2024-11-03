import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonItem, IonLabel, IonList } from "@ionic/angular/standalone";
import { Cita } from "src/app/modelo/cita";
import { CitasService } from "src/app/servicios/citas.service";

@Component({
  selector: "app-lista-citas",
  templateUrl: "./lista-citas.component.html",
  styleUrls: ["./lista-citas.component.scss"],
  standalone: true,
  imports: [CommonModule, IonItem, IonLabel, IonList],
})
export class ListaCitasComponent implements OnInit {
  citas: Cita[] = [];

  constructor(private _citasService: CitasService) {}

  ngOnInit() {
    this.citas = this._citasService.getCitas();
  }
}
