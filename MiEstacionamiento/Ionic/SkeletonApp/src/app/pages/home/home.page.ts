import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { EstacionamientoService } from 'src/app/servicios/estacionamiento.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  username: string ="";
  mensaje: string= "";
  fecha: string ="";

  nombres : string = "";
  apellido : string = "";
  niEducacion : string = "";
  fehcaNaci: string = "";
  router: any;
  
  estacionamiento: any;


  constructor(private rutaActiva: ActivatedRoute,private alertController: AlertController, private storage: Storage, private as:EstacionamientoService ) { 
    this.verEstacionamiento();
    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['nombreUser']){
        this.mensaje = params['nombreUser'];
      }
      
    })
    
  }
  verEstacionamiento() {
    this.as.verEstacionamiento().subscribe((resp: any) => {
      this.estacionamiento = resp;
        console.log(this.estacionamiento);
    })
  }
  
 

  ngOnInit() {
    this.username = history.state.username;
  }


  async mostrarInfo(){
    const alerta= await this.alertController.create({
      header: 'Informacion: ',
      message: `Nombre Completo : ${this.nombres}  ${this.apellido }`,
      buttons: ['ok'],
    });
    await alerta.present();
  };


  enviar(){
    console.log("correcto" , this.nombres)
    console.log('Correcto', this.apellido)
    console.log("Correcto ", this.niEducacion)
    console.log("correcto ", this.fecha)
    this.mostrarInfo();
  }

  async ingreso(){
    
    const alert = await this.alertController.create({
      header: 'Bienvenido/A',
      message: 'Has ingresado correctamente :)',
      buttons: ['Adelante '],
    });

      let users : NavigationExtras ={
        queryParams: {nombreUser: this.username}
      }

      this.router.navigate(['/home'], users); 

    }
    async verStorage(){
      let nombre = await this.storage.get("nombreUsuario")
      console.log("El nombre es: " + nombre)
    }
}
