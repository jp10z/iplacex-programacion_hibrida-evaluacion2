import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
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
import { CitasService } from "src/app/servicios/citas.service";

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
export class CrearCitaComponent implements OnInit, AfterViewInit {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCitaCreadaEvent = new EventEmitter();

  frase: string = "";
  autor: string = "";

  // ngModels del template
  @ViewChild("fraseInput") fraseInput!: NgModel;
  @ViewChild("autorInput") autorInput!: NgModel;

  constructor(private _citasService: CitasService) {
    addIcons({ addOutline });
  }

  async ngOnInit() {
    await this._citasService.initPlugin();
  }

  ngAfterViewInit() {
    this.fraseInput.control.markAsTouched();
    this.autorInput.control.markAsTouched();
  }

  async addCita() {
    await this._citasService.addCita(this.frase, this.autor);
    this.onCitaCreadaEvent.emit();
  }
}
