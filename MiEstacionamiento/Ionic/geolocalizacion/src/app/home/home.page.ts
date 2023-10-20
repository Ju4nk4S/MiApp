import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  async obtenerUbicacion()
  {
    let ubicacion = await Geolocation.getCurrentPosition();
    let ubicacionTexto = "Latitud"+ubicacion.coords.latitude + "Longitud: "+ubicacion.coords.longitude
    console.log(ubicacion)
    this.mostrarUbicacion(ubicacionTexto)
    
    
  }
  async mostrarUbicacion(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: 'top',
    });

    await toast.present();
  }
}
