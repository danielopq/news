window.onload = start;

function start(){
	document.getElementById("menu-hamburger").addEventListener('click',openMobileMenu,false);
	document.getElementById("closeIcon-img").addEventListener('click',closeMobileMenu,false);
}

function openMobileMenu(){
	document.getElementById("menu-mobile").style.display = "block";
}

function closeMobileMenu(){
	document.getElementById("menu-mobile").style.display = "none";
}