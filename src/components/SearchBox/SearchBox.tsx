import { useState } from "react"

interface CountrySearchMap {
    name: string
    code: string
}

type SuggestionsState = CountrySearchMap[] | null

// TODO: serde-json or pre comply?

export default function SearchBox({ countries }: { countries: CountrySearchMap[] }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [suggestions, setSuggestions] = useState<SuggestionsState>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearchTerm(value)

        if (value === "") {
            setSuggestions(null)
        }
        const filteredSuggestions = countries.filter(country =>
            country.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    }

    // clear input after click
    const handleSuggestionClick = (country: CountrySearchMap) => {
        setSearchTerm(country.name);
        setSuggestions(null);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {suggestions && suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.code}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-item"
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
