import { Component } from '@angular/core';
import { LocalStorageService } from '../app.service';
import { HomeServicio } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private localStorageService: LocalStorageService, private homeServicio: HomeServicio) {}
  name: string ="";

  onSubmit() {
    const datosFormulario = this.obtenerDatosDelFormulario(); // Reemplaza con tu propia lógica
    if (navigator.onLine) {
      // El usuario está online, envía los datos al servidor
      this.enviarDatosAlServidor(datosFormulario); // Reemplaza con tu propia lógica
    } else {
      // El usuario está offline, guarda los datos localmente
      this.localStorageService.guardarDatosLocalmente(datosFormulario);
    }
  }

  private obtenerDatosDelFormulario() {
    // Aquí deberías escribir el código para obtener los datos del formulario
    // Por ejemplo:
    return this.name;
  }

  private enviarDatosAlServidor(datos: any) {
    // Aquí deberías escribir el código para enviar los datos al servidor
    // Por ejemplo:
    this.homeServicio.enviarDatosAlServidor(datos);
    // this.homeServicio.enviarDatosAlServidor(datos).subscribe(
    //   response => {
    //     console.log('Datos enviados con éxito', response);
    //   },
    //   error => {
    //     console.error('Error al enviar datos', error);
    //   }
    // );
  }
}