let but = document.querySelector('.catigories__button');
let navigate = document.querySelector('.categories-menu__list');
let links = document.querySelectorAll('.cat-menu__link');
but.addEventListener('click', 
	function() {
		navigate.classList.toggle('active');
	});
for (let link of links) {
	link.addEventListener('click', function(){
		navigate.classList.toggle('active');
	})
}
	