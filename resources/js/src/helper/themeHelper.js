// @ts-check
class Theme {
    /**
     * Toggles between dark and light theme
     */
    static set() {
        localStorage.getItem("dark") === "true"
            ? localStorage.setItem("dark", "false")
            : localStorage.setItem("dark", "true");
        Theme.apply();
    }

    /**
     * Returns true if theme is dark
     * @returns {boolean}
     */
    static get() {
        return localStorage.getItem("dark") !== "false";
    }

    /**
     * Responsible for applying theme based on theme value
     */
    static apply() {
        let root = document.documentElement.style;
        if (localStorage.getItem("dark") === "true") {
            root.setProperty("--primary-color", "#383838");
            root.setProperty("--primary-color-2", "#272727");
            root.setProperty("--secondary-color", "#f2f2f2");
            root.setProperty("--grey", "#E0E0E0");
            root.setProperty("--alpha", "0");
            root.setProperty("--btn-secondary-bg", "#616161");
        } else {
            root.setProperty("--primary-color", "#f2f2f2");
            root.setProperty("--primary-color-2", "#fff");
            root.setProperty("--grey", "#999999");
            root.setProperty("--secondary-color", "#131313");
            root.setProperty("--alpha", "1");
            root.setProperty("--btn-secondary-bg", "var(--black)");
        }
    }
}

export default Theme;
