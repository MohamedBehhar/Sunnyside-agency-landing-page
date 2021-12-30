const	menuBtn	= document.querySelector(".menu-toglle");
const	menu	= document.querySelector(".menu");


menuBtn.addEventListener('click', function(){
	menu.classList.toggle('show-menu')
})