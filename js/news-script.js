
(() => {
	document.getElementById("menu-hamburger").addEventListener('click', openMobileMenu, false);
	document.getElementById("closeIcon-img").addEventListener('click', closeMobileMenu, false);
})()

/**
 * Displays the main menu (mobile version).
 */
const openMobileMenu = () => {
	document.getElementById("menu-mobile").style.display = "block";
}

/**
 * Hides the main menu (mobile version).
 */
const closeMobileMenu = () => {
	document.getElementById("menu-mobile").style.display = "none";
}