const mobNavBar = document.querySelector('.mob-nav')
const mobNavBarLogo = document.querySelector('.mob-nav-logo')
function openMobNav() {

    mobNavBar.classList.remove("hidden");
    mobNavBarLogo.style.display = "none"
}
function closeMobNav() {

    mobNavBar.classList.add("hidden");
    mobNavBarLogo.style.display = "block"
}