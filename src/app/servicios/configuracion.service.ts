import { Injectable } from "@angular/core";
import { Preferences } from "@capacitor/preferences";

@Injectable({
  providedIn: "root",
})
export class ConfiguracionService {
  private readonly KEY_PERMITIR_BORRAR_CITAS_EN_INICIO =
    "permitirBorrarCitasEnInicio";

  constructor() {}

  async permitirBorrarCitasEnInicio(): Promise<boolean> {
    const result = await Preferences.get({
      key: this.KEY_PERMITIR_BORRAR_CITAS_EN_INICIO,
    });
    return result?.value === "true";
  }

  async setPermitirBorrarCitasEnInicio(newValue: boolean): Promise<void> {
    await Preferences.set({
      key: this.KEY_PERMITIR_BORRAR_CITAS_EN_INICIO,
      value: newValue ? "true" : "false",
    });
  }
}
