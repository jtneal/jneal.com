import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FooterMenuComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
})
export class AppModule {}
