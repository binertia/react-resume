import { useState } from "react"

interface FilterProp {
    region: string
}


// context for render part maybe
export default function FilterCountryList({ countries }: { countries: FilterProp[] }) {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

    const filteredCountries = selectedRegion
        ? countries.filter((country) => country.region === selectedRegion)
        : countries

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]
}
