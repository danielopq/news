
/**
 * Displays the main menu (mobile version).
 */
const openMobileMenu = () => {
	document.getElementById("mobileMenu").style.display = "block";
	document.body.style.overflow = "hidden";
}

/**
 * Hides the main menu (mobile version).
 */
const closeMobileMenu = () => {
	document.getElementById("mobileMenu").style.display = "none";
	document.body.style.overflow = "auto";
}

(() => {
	document.getElementById("hamburger").addEventListener('click', openMobileMenu, false);
	document.getElementById("hideMenuBt").addEventListener('click', closeMobileMenu, false);
})()