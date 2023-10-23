import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AterrizajePage } from './aterrizaje.page';

const routes: Routes = [
  {
    path: '',
    component: AterrizajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AterrizajePageRoutingModule {}
