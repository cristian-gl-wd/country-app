import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarNavComponent } from './components/navbar-nav/navbar-nav.component';
import { NavbarSearcherComponent } from './components/navbar-searcher/navbar-searcher.component';
import { NavbarTitleComponent } from './components/navbar-title/navbar-title.component';
import { NavbarMainPageComponent } from './page/navbar-main-page/navbar-main-page.component';



@NgModule({
  declarations: [
    NavbarMainPageComponent,
    NavbarTitleComponent,
    NavbarNavComponent,
    NavbarSearcherComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarMainPageComponent
  ]
})
export class SidebarModule { }
