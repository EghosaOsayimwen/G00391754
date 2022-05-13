import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Flashlight2PageRoutingModule } from './flashlight2-routing.module';

import { Flashlight2Page } from './flashlight2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Flashlight2PageRoutingModule
  ],
  declarations: [Flashlight2Page]
})
export class Flashlight2PageModule {}
