import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { MotoComponent } from './components/moto/moto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
