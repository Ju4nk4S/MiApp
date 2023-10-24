import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AterrizajePageRoutingModule } from './aterrizaje-routing.module';

import { AterrizajePage } from './aterrizaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AterrizajePageRoutingModule
  ],
  declarations: [AterrizajePage]
})
export class AterrizajePageModule {}
