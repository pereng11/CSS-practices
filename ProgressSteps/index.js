const $progress = document.getElementById('progress');
const $prev = document.getElementById('prev');
const $next = document.getElementById('next');
const $circles = document.querySelectorAll('.circle');

const progressLevels = $circles.length - 1;
let currProgressLevel = 0;

function setProgress() {
	$progress.style.width = (currProgressLevel / progressLevels) * 100 + '%';
}
function handleCircle() {
	$circles.forEach((e, idx) => {
		if (idx === currProgressLevel) {
			e.classList.add('active');
		} else {
			e.classList.remove('active');
		}
	});
}
function handleBtnStatus() {
	if (currProgressLevel === 0) {
		$prev.disabled = true;
	} else {
		$prev.disabled = false;
	}
	if (currProgressLevel === progressLevels) {
		$next.disabled = true;
	} else {
		$next.disabled = false;
	}
}
$prev.addEventListener('click', () => {
	if (currProgressLevel > 0) currProgressLevel--;
	if (currProgressLevel === 0) return;
	handleBtnStatus();
	setProgress();
	handleCircle();
});

$next.addEventListener('click', () => {
	if (currProgressLevel < progressLevels) currProgressLevel++;
	if (currProgressLevel === progressLevels) return;
	handleBtnStatus();
	setProgress();
	handleCircle();
});
