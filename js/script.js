// MOBILE RESPONSIVE NAVIGATION 

let menuicon = document.getElementById("menu_icon");
let navbar = document.getElementsByClassName("navbar")[0];

menuicon.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.toggle('active')
}



// SCROLL BAR SECTION

window.onscroll = () => {
	let header = document.getElementsByClassName("header")[0];
	header.classList.toggle('sticky',window.scrollY > 100);

	menuicon.classList.remove('bx-x');
	navbar.classList.remove('active')


}