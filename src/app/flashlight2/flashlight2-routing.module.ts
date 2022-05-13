import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flashlight2Page } from './flashlight2.page';

const routes: Routes = [
  {
    path: '',
    component: Flashlight2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Flashlight2PageRoutingModule {}
