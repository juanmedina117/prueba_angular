import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ConsumoService } from '../app/services/consumo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConsumoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
