import { Component, OnInit } from '@angular/core';
import { EstacionamientoService } from 'src/app/servicios/estacionamiento.service';

@Component({
  selector: 'app-ver-mapa',
  templateUrl: './ver-mapa.page.html',
  styleUrls: ['./ver-mapa.page.scss'],
})
export class VerMapaPage implements OnInit {
  estacionamiento: any;
  constructor(private as:EstacionamientoService) { 
    this.verEstacionamiento();
  }
  
verEstacionamiento() {
  this.as.verEstacionamiento().subscribe((resp: any) => {
    this.estacionamiento = resp;
      console.log(this.estacionamiento);
  })
}
  ngOnInit() {
  }

}
