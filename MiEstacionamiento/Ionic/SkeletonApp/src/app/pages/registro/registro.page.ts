import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  alertController: any;
  username: any;
  router: any;

  constructor() { }

  ngOnInit() {
    
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
  


}
