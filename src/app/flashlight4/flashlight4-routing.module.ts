import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flashlight4Page } from './flashlight4.page';

const routes: Routes = [
  {
    path: '',
    component: Flashlight4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Flashlight4PageRoutingModule {}
