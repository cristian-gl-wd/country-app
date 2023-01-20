export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    borders?:     string[];
    postalCode?:  PostalCode;
    gini?:        { [key: string]: number };
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export type Side = "left" | "right";

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export type Continent = "North America" | "South America" | "Europe" | "Asia" | "Oceania" | "Africa" | "Antarctica";

export interface Currencies {
    xcd?: Aed;
    eur?: Aed;
    dkk?: Aed;
    fok?: Aed;
    pkr?: Aed;
    fjd?: Aed;
    mnt?: Aed;
    aud?: Aed;
    usd?: Aed;
    nok?: Aed;
    mru?: Aed;
    aed?: Aed;
    cdf?: Aed;
    xpf?: Aed;
    rwf?: Aed;
    gbp?: Aed;
    imp?: Aed;
    idr?: Aed;
    zmw?: Aed;
    jep?: Aed;
    uyu?: Aed;
    cad?: Aed;
    pen?: Aed;
    khr?: Aed;
    fkp?: Aed;
    pgk?: Aed;
    lrd?: Aed;
    cve?: Aed;
    cuc?: Aed;
    cup?: Aed;
    djf?: Aed;
    lbp?: Aed;
    mmk?: Aed;
    kyd?: Aed;
    xaf?: Aed;
    zar?: Aed;
    srd?: Aed;
    crc?: Aed;
    chf?: Aed;
    kpw?: Aed;
    uah?: Aed;
    xof?: Aed;
    tvd?: Aed;
    mad?: Aed;
    mdl?: Aed;
    omr?: Aed;
    yer?: Aed;
    kwd?: Aed;
    egp?: Aed;
    ils?: Aed;
    jod?: Aed;
    cop?: Aed;
    mkd?: Aed;
    qar?: Aed;
    twd?: Aed;
    mga?: Aed;
    bsd?: Aed;
    ang?: Aed;
    sbd?: Aed;
    shp?: Aed;
    hnl?: Aed;
    amd?: Aed;
    gtq?: Aed;
    czk?: Aed;
    mur?: Aed;
    gel?: Aed;
    php?: Aed;
    all?: Aed;
    jmd?: Aed;
    rsd?: Aed;
    clp?: Aed;
    gyd?: Aed;
    tzs?: Aed;
    bdt?: Aed;
    dop?: Aed;
    krw?: Aed;
    bbd?: Aed;
    ngn?: Aed;
    bhd?: Aed;
    kid?: Aed;
    stn?: Aed;
    cny?: Aed;
    kes?: Aed;
    mvr?: Aed;
    bnd?: Aed;
    sgd?: Aed;
    gnf?: Aed;
    mop?: Aed;
    ern?: Aed;
    sek?: Aed;
    ghs?: Aed;
    bgn?: Aed;
    bwp?: Aed;
    irr?: Aed;
    bob?: Aed;
    nzd?: Aed;
    byn?: Aed;
    bmd?: Aed;
    kzt?: Aed;
    lak?: Aed;
    uzs?: Aed;
    myr?: Aed;
    isk?: Aed;
    pyg?: Aed;
    brl?: Aed;
    etb?: Aed;
    huf?: Aed;
    sdg?: BAM;
    sos?: Aed;
    aoa?: Aed;
    sar?: Aed;
    zwl?: Aed;
    ves?: Aed;
    gmd?: Aed;
    dzd?: Aed;
    syp?: Aed;
    jpy?: Aed;
    rub?: Aed;
    lsl?: Aed;
    tnd?: Aed;
    awg?: Aed;
    hrk?: Aed;
    afn?: Aed;
    sll?: Aed;
    iqd?: Aed;
    kmf?: Aed;
    vnd?: Aed;
    ckd?: Aed;
    szl?: Aed;
    top?: Aed;
    ggp?: Aed;
    nad?: Aed;
    ttd?: Aed;
    btn?: Aed;
    inr?: Aed;
    hkd?: Aed;
    ssp?: Aed;
    tjs?: Aed;
    ugx?: Aed;
    wst?: Aed;
    azn?: Aed;
    lkr?: Aed;
    ars?: Aed;
    htg?: Aed;
    npr?: Aed;
    tmt?: Aed;
    mwk?: Aed;
    gip?: Aed;
    vuv?: Aed;
    mxn?: Aed;
    bam?: BAM;
    ron?: Aed;
    kgs?: Aed;
    thb?: Aed;
    bif?: Aed;
    mzn?: Aed;
    nio?: Aed;
    pab?: Aed;
    pln?: Aed;
    lyd?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export type Region = "Americas" | "Europe" | "Asia" | "Oceania" | "Africa" | "Antarctic";

export type StartOfWeek = "monday" | "sunday" | "saturday";

export type Status = "officially-assigned";
