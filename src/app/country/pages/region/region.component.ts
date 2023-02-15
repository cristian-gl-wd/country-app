import { Component } from '@angular/core';

import { CountryByRegion } from '../../interfaces/countryByRegion.interface';
import { Regions } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  countries:      CountryByRegion[] = [];
  regions:        Regions[] = [{code:'EU', name:'European Union'}, {code:'EFTA', name:'European Free Trade Association'}, {code:'CARICOM', name:'Caribbean Community'}, {code:'PA', name:'Pacific Alliance'}, {code:'AU', name:'African Union'}, {code:'USAN', name:'Union of South American Nations'}, {code:'EEU', name:'Eurasian Economic Union'}, {code:'AL', name:'Arab League'}, {code:'ASEAN', name:'Association of Southeast Asian Nations'}, {code:'CAIS', name:'Central American Integration System'}, {code:'CEFTA', name:'Central European Free Trade Agreement'}, {code:'NAFTA', name:'North American Free Trade Agreement'}, {code:'SAARC', name:'South Asian Association for Regional Cooperation'}];
  activeRegion:   Regions = {
    code: '',
    name: ''
  };

  hasError:       Boolean = false;

  constructor(private CountryService: CountryService) {}

  getCSSClass(region:string):string {
    return this.activeRegion.code === region ? 'btn-outline-primary' : 'btn-primary';
  }

  public activateRegion(region: Regions):void {
    if (region === this.activeRegion) {return}
    
    this.activeRegion = region;
    this.countries = [];
    this.hasError = false;

    this.CountryService.searchByRegionCode(this.activeRegion.code)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
          console.log(countries);
          
        },
        error: (e) => {
          this.hasError = true;
          this.countries = [];
        }
    });
  }

}
