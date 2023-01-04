import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CountryFormComponent } from './components/country-form/country-form.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';


@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent,
    CountryTableComponent,
    CountryFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
   exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent
  ]
})
export class CountryModule { }
