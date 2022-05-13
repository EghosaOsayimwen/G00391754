import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Flashlight4PageRoutingModule } from './flashlight4-routing.module';

import { Flashlight4Page } from './flashlight4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Flashlight4PageRoutingModule
  ],
  declarations: [Flashlight4Page]
})
export class Flashlight4PageModule {}
