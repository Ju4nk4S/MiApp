import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarEstPage } from './agregar-est.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarEstPageRoutingModule {}
