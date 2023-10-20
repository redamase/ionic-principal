import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  guardarDatosLocalmente(datos: any) {
    alert("vamos a guardar los datos");
    const datosGuardadosString = localStorage.getItem('datosGuardados');
    const datosGuardados = datosGuardadosString ? JSON.parse(datosGuardadosString) : [];
    datosGuardados.push(datos);
    localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
  }

  obtenerDatosGuardados() {
    const datosGuardadosString = localStorage.getItem('datosGuardados');
    const datosGuardados = datosGuardadosString ? JSON.parse(datosGuardadosString) : [];
    return JSON.parse(datosGuardados);
  }

  limpiarDatosGuardados() {
    localStorage.removeItem('datosGuardados');
  }
}