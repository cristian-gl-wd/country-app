export interface CountryByRegion {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    subregion:      string;
    region:         Region;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area?:          number;
    timezones:      string[];
    nativeName:     string;
    numericCode:    string;
    flags:          Flags;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    independent:    boolean;
    gini?:          number;
    borders?:       string[];
    cioc?:          string;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso6391:    string;
    iso6392:    string;
    name:       string;
    nativeName: string;
}

export type Region = "Europe" | "Americas";

export interface RegionalBloc {
    acronym:        Acronym;
    name:           Name;
    otherAcronyms?: string[];
    otherNames?:    string[];
}

export type Acronym = "EU" | "USAN";

export type Name = "European Union" | "Union of South American Nations";

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}
