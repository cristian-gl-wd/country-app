import { Component, Input } from '@angular/core';

import { CountryByRegion } from '../../interfaces/countryByRegion.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input() countries: CountryByRegion[] = [];

}
