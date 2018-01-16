function initiateModals() {
	const modalBtns = [...document.querySelectorAll('.js-modal')];
	const modal = document.querySelector('.modal');
	const bodyCont = document.querySelector('.body-container');

	modalBtns.forEach(btn => {		
		btn.addEventListener('click', function(e) {
			e.preventDefault();

			modal.classList.remove('hidden');
			bodyCont.classList.add('noscroll');
		});
	});

	document.addEventListener('click', function(e) {
		if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
			e.preventDefault();
			modal.classList.add('hidden');
			bodyCont.classList.remove('noscroll');
		}
	});
}

document.addEventListener('DOMContentLoaded', initiateModals)
