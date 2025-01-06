interface Flag {
  svg: string,
  png: string
}

interface Currency {
  code: string,
  name: string,
  symbol: string
}

interface Language {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}

interface Translate {
  [key: string]: string;
}

interface RegionalBloc {
  acronym: string,
  name: string
}

export default interface CountryData {
  name: string,
  topLevelDomain: string[],
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: string[],
  capital: string,
  altSpellings: string[],
  subregion: string,
  region: string,
  population: number,
  latlng: number[],
  demonym: string,
  area: number,
  timezones: string[],
  borders: string[],
  nativeName: string,
  numbericCode: string,
  flags: Flag
  currencies: Currency[],
  languages: Language[],
  translates: Translate[],
  regionalBlocs: RegionalBloc[]
  cioc: string,
  independent: boolean
}
