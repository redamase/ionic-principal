import { Component } from '@angular/core';
import { LocalStorageService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService) {
    window.addEventListener('online', this.onOnline.bind(this));
    window.addEventListener('offline', this.onOffline.bind(this));
  }


  onOnline() {
    const datosPendientes = this.localStorageService.obtenerDatosGuardados();
    if (datosPendientes.length > 0) {
      // Envía los datos al servidor aquí
      // Una vez que se envían con éxito, puedes limpiar el almacenamiento local
      this.localStorageService.limpiarDatosGuardados();
    }
  }

  onOffline() {
    alert("offline")
  }
}
