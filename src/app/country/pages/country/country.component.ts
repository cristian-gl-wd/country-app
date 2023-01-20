import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  query       : string = '';
  hasError    : boolean = false;
  countries   : Country[] = [];

  constructor(private CountryService: CountryService) {}

  public search(query: string) {
    this.query = query;
    this.hasError = false;

    this.CountryService.searchCountry(this.query)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
          console.log(this.countries);
        },
        error: (e) => {
          this.hasError = true;
          this.countries = [];
        }
    });
  }

  public suggestions(query: string) {
    this.hasError = false;
    //TODO[C]: Crear sugerencias
  }
}
