
(()=>{
	document.getElementById("menu-hamburger").addEventListener('click',openMobileMenu,false);
	document.getElementById("closeIcon-img").addEventListener('click',closeMobileMenu,false);
})()

/**
 * Displays the main menu (mobile version).
 */
function openMobileMenu(){
	document.getElementById("menu-mobile").style.display = "block";
}

/**
 * Hide the main menu (mobile version).
 */
function closeMobileMenu(){
	document.getElementById("menu-mobile").style.display = "none";
}