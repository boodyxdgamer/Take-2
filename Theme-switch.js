let darkmode = localStorage.getItem('Mode')      
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('Mode', 'active');
    darkmode = "active";
}
const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('Mode', null);
    darkmode = null;
}

if (darkmode === "active") {
    enableDarkMode();
}   

themeSwitch.addEventListener('click', () => {
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
