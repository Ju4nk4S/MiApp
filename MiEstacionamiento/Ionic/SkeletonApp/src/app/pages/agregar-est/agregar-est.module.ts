import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEstPageRoutingModule } from './agregar-est-routing.module';

import { AgregarEstPage } from './agregar-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEstPageRoutingModule
  ],
  declarations: [AgregarEstPage]
})
export class AgregarEstPageModule {}
