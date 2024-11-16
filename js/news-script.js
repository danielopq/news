
/**
 * Displays the main menu (mobile version).
 */
const openMobileMenu = () => {
	document.getElementById("mobileMenu").style.display = "block";
}

/**
 * Hides the main menu (mobile version).
 */
const closeMobileMenu = () => {
	document.getElementById("mobileMenu").style.display = "none";
}

(() => {
	document.getElementById("hamburger").addEventListener('click', openMobileMenu, false);
	document.getElementById("hideMenuBt").addEventListener('click', closeMobileMenu, false);
})()