import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent
  ]
})
export class CountryModule { }
