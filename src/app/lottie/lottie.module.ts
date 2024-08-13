import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottiePageRoutingModule } from './lottie-routing.module';

import { LottiePage } from './lottie.page';

import { LottieComponent } from 'ngx-lottie';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottiePageRoutingModule,
    LottieComponent
  ],
  declarations: [LottiePage]
})
export class LottiePageModule {}
