import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServicio {

  private apiUrl = 'https://api.ejemplo.com'; // Reemplaza con la URL de tu servidor

  constructor() { }

  enviarDatosAlServidor(datos: any){
    alert("Los datos fueron enviados "+datos);
    // const url = `${this.apiUrl}/ruta-de-tu-api`; // Reemplaza con la ruta de tu API

    // // Realiza una solicitud POST al servidor
    // return this.http.post(url, datos);
  }
}