import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {
  @ViewChild('mapElement', { static: false }) mapElement!: ElementRef;

  map: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const mapOptions = {
      center: { lat: 0, lng: 0 }, // Latitud y longitud iniciales del mapa
      zoom: 12, // Nivel de zoom inicial
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
