export default function CountryBorderButton(name: string) {
    const handleClick = () => {
        window.location.href = `/country:${name}`
    }

    return (
        <button onClick={handleClick}>
            {name}
        </button>
    )
}
