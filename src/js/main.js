var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

var remove = function() {
	modal.classList.remove('modal_active');
}

button.addEventListener('click', function() {
	modal.classList.add('modal_active');
	setTimeout(remove, 5000)
});

close.addEventListener('click', remove);