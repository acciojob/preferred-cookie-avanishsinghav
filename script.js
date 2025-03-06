//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");
    const form = document.getElementById("preferences-form");

    // Function to get cookie by name
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const [cookieName, cookieValue] = cookies[i].split("=");
            if (cookieName === name) return decodeURIComponent(cookieValue);
        }
        return null;
    }

    // Load preferences from cookies
    function loadPreferences() {
        const savedFontSize = getCookie("fontsize");
        const savedFontColor = getCookie("fontcolor");
        
        if (savedFontSize) {
            document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
            fontSizeInput.value = parseInt(savedFontSize);
        }
        
        if (savedFontColor) {
            document.documentElement.style.setProperty("--fontcolor", savedFontColor);
            fontColorInput.value = savedFontColor;
        }
    }

    // Save preferences in cookies
    function savePreferences(event) {
        event.preventDefault();
        
        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;
        
        document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`; // 1 year expiration
        document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;
        
        document.documentElement.style.setProperty("--fontsize", fontSize + "px");
        document.documentElement.style.setProperty("--fontcolor", fontColor);
    }

    form.addEventListener("submit", savePreferences);
    loadPreferences();
});
