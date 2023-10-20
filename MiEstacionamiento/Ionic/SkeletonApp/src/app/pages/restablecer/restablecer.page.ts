import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  username: any;

  constructor(private alertController: AlertController, private router: Router) { }

    

   

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


