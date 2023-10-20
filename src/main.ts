import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
navigator.serviceWorker.register('/ngsw-worker.js')
  .then(registration => {
    console.log('Service Worker registrado', registration);
    
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker) {
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('Nuevo contenido disponible; por favor actualice.');
            } else {
              console.log('Contenido almacenado en caché para uso sin conexión.');
            }
          }
        };
      }
    };
  })
  .catch(error => console.error('Error al registrar el Service Worker', error));