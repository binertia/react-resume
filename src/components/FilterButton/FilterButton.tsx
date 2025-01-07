import { useFilterContext } from "../../hooks/useFilterContext";

export default function FilterButtons() {
    const { setRegionFilter, selectedRegion } = useFilterContext();

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <div className="filter-buttons">
            {regions.map((region) => (
                <button
                    key={region}
                    onClick={() => setRegionFilter(region === selectedRegion ? null : region)}
                    className={region === selectedRegion ? "active" : ""}
                >
                    {region}
                </button>
            ))}
        </div>
    );
}
