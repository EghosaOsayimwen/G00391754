import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Flashlight3PageRoutingModule } from './flashlight3-routing.module';

import { Flashlight3Page } from './flashlight3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Flashlight3PageRoutingModule
  ],
  declarations: [Flashlight3Page]
})
export class Flashlight3PageModule {}
