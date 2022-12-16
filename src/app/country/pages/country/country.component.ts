import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  query   : string = '';
  hasError: boolean = false;

  constructor(private CountryService: CountryService) {}

  public search() {
    this.hasError = false;
    console.log(this.query);

    this.CountryService.searchCountry(this.query)
      .subscribe({
        next: (countries) => console.log(countries),
        error: (e) => this.hasError = true
    });
  }

}
