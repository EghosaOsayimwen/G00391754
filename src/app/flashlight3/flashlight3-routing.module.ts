import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flashlight3Page } from './flashlight3.page';

const routes: Routes = [
  {
    path: '',
    component: Flashlight3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Flashlight3PageRoutingModule {}
