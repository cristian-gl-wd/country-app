import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { SharedModule } from './shared/shared.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountryModule,
    SharedModule,
    SidebarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
