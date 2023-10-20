import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionamientoService } from 'src/app/servicios/estacionamiento.service';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.page.html',
  styleUrls: ['./estacionamiento.page.scss'],
})
export class EstacionamientoPage implements OnInit {
  estacionamiento: any;

  id: string | undefined;
  detalles: any;
  toastController: any;


  constructor(private as:EstacionamientoService, private route:ActivatedRoute ) { 
    this.verEstacionamiento();
    }
    verEstacionamiento() {
      this.as.verEstacionamiento().subscribe((resp: any) => {
        this.estacionamiento = resp;
          console.log(this.estacionamiento);
      })
    }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      this.as.verDetalles (parametros['id']).subscribe( (detalles: any )=> {
        this.id = parametros['id'];
        this.detalles = detalles;
        console.log(this.detalles);
      } )
    } )
    
    }
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


