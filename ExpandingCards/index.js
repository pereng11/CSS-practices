const $container = document.querySelector('.container');
const $panels = document.querySelectorAll('.panel');

function handleActive(id) {
	$panels.forEach((p) => {
		if (p.dataset.id === id) {
			p.classList.add('active');
		} else {
			p.classList.remove('active');
		}
	});
}

$container.addEventListener('click', ({ target }) => {
	if (!target.classList.contains('panel')) return;
	handleActive(target.dataset.id);
});
