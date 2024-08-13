import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { ServiceWorkerModule } from '@angular/service-worker'; // Note we need a separate function as it's required // by the AOT compiler.
export function playerFactory() { return player; }

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}) ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideLottieOptions({
    player: () => import('lottie-web'),
  })],

  bootstrap: [AppComponent],
})
export class AppModule {}
