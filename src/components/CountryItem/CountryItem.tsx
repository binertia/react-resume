interface CountryItemProps {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    domain: string;
    currencies: string[];
    languages: string[];
    border: string[];
}

export default function CountryItem({
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    domain,
    currencies,
    languages
}: CountryItemProps) {
    return (
        <>
            <div>
                <h4>{name}</h4>
                <p>Native Name: {nativeName}</p>
                <p>Population: {population.toLocaleString()}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subRegion}</p>
                <p>Capital: {capital}</p>
            </div>
            <div>
                <p>Top Level Domain: {domain}</p>
                <p>Currencies: {currencies.join(", ")} </p>
                <p>Languages: {languages.join(", ")}</p>
            </div>
        </>
    );
}
