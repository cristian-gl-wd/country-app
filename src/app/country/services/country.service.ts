import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Country } from '../interfaces/country.interface';
import { CountryByRegion } from '../interfaces/countryByRegion.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.com';

  get httpParams_Table() {
    return new HttpParams()
      .set('fields', 'name,flag,capital,population,alpha3Code');
  }

  get httpParams_List() {
    return new HttpParams()
      .set('fields', 'name,flags,capital,population,cca3,coatOfArms');
  }

  constructor(private http: HttpClient) { }

  searchCountry(query: string): Observable<Country[]>  {
    const url = `${ this.apiURL }/v3.1/name/${ query }`;
    return this.http.get<Country[]>(url, {params: this.httpParams_List});
  }

  searchCapital(query: string): Observable<Country[]>  {
    const url = `${ this.apiURL }/v3.1/capital/${ query }`;
    return this.http.get<Country[]>(url, {params: this.httpParams_List});
  }

  searchCountryByCode(query: string): Observable<Country>  {
    const url = `${ this.apiURL }/v3.1/alpha/${ query }`;
    return this.http.get<Country>(url);
  }

  searchByRegionCode(query: string): Observable<CountryByRegion[]> {
    const url = `${ this.apiURL }/v2/regionalbloc/${ query }`;
    return this.http.get<CountryByRegion[]>(url, {params: this.httpParams_Table});
  }
}
