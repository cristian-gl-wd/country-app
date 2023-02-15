import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  query                 : string = '';
  hasError              : boolean = false;
  countries             : Country[] = [];
  suggestionsCountries  : Country[] = [];
  showSuggestions       : boolean = false;

  constructor(private CountryService: CountryService) {}

  public search(query: string) {
    this.query = query;
    this.hasError = false;
    this.showSuggestions = false;

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
    this.query = query;
    
    this.CountryService.searchCountry(query)
    .subscribe(countries => {
      this.suggestionsCountries = countries.splice(0,5)
      this.showSuggestions = true;
    });
  }

  public searchQueryBySuggestionOption(query: string): void {
    this.search(query);
  }
}
