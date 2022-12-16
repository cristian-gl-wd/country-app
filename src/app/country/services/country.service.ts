import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry(query: string): Observable<Country[]>  {
    const url = `${ this.apiURL }/name/${ query }`;
    return this.http.get<Country[]>(url);
  }
}
