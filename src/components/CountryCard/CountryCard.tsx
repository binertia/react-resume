interface CountryCardProps {
    img: string,
    name: string,
    population: number,
    region: string,
    capital: string
}

export default function CountryCard({ img, name, population, region, capital }: CountryCardProps) {
    return (
        <div className="country-card">
            <img src={img} />
            <h2 content={name} />
            <p content={population.toString()} />
            <p content={region} />
            <p content={capital} />
        </div>
    )
}
