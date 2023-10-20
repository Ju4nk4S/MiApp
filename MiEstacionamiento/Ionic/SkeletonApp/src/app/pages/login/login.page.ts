import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: String = '';
  password: String = '';

  constructor(
    private alertController: AlertController,
    private router: Router, private storage: Storage
  ) {

  }




  async  ngOnInit() {
    await this.storage.create();
  }

  // ALERTAS !
  async showPassword() {
    const alerta = await this.alertController.create({
      header: 'Error',
      message: 'La contraseña debe tener 4 caracteres',
      buttons: ['ok'],
    });
    await alerta.present();
  }

  async Exito() {
    const alerta = await this.alertController.create({
      header: 'Bienvenido/A',
      message: 'Has ingresado correctamente :)',
      buttons: ['Ingresar '],
    });
    await alerta.present();
  }

  async registro() {
    const alerta = await this.alertController.create({
      header: 'Registrate con tu correo electronico',
      buttons: ['registro '],
    });
    await alerta.present();
  }

  async showWarningAlert() {
    const alert = await this.alertController.create({
      header: 'Advertencia',
      message: 'El nombre de usuario debe tener entre 3 y 8 caracteres.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  // fin alertas

  async ingreso() {
    if(this.username.length >=3 && this.username.length <=8) {
      console.log("valido")
      
      
    }else{
      this.showWarningAlert();
    }
    if (this.password.length == 4){
      
      console.log("valido")
    }else{
      this.showPassword();
    }
    let users: NavigationExtras = {
      queryParams: { nombreUser: this.username },
    };
    this.router.navigate(['/home'], users);
    
    const alert = await this.alertController.create({
      header: 'Bienvenido/A',
      message: 'Has ingresado correctamente :)',
      buttons: ['Adelante '],
    });

 
  //guardar información storege

  this.storage.set("nombreUsuario", "Josue")

    
  }
}
