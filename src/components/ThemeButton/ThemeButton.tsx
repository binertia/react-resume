import { useTheme } from "../../hooks/useThemeContext";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};
