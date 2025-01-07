export default function GoBackButton() {
    const handleClickGoBack = () => {
        window.location.href = "/"
    }

    return (
        <button onClick={handleClickGoBack}>
            back
        </button>
    )
}
