import { Component, OnInit } from '@angular/core';
import { AutheticationService } from 'src/app/authetication.service';
import { NavigationExtras,  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  email:any
  constructor(
    public alertController: AlertController, 
    public route: Router,
    public authService: AutheticationService
    ) { }
  ngOnInit() {    
  }  
  async restablecer(){
    //this.authService.restablecer(this.email).then(()=> {
      //console.log('link de recuperacion')  
      //this.route.navigate(['/login'])      
    //}).catch((error) => {
     // console.log(error);      
    //})
  }  
}


