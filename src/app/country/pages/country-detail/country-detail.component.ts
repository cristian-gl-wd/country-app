import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country, Aed } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent {
  
  country!: Country;
  currencies: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountryService: CountryService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.CountryService.searchCountryByCode(id)),
        tap(console.log)
      )
      .subscribe(country => {
        this.country = country[0];
      });

  }
}
