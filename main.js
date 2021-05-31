const card = document.querySelector('div.card');

card.addEventListener('mousemove', e => {
	const m = 50;

	const style = `
        --rx: ${(e.pageY / innerHeight - 0.5) * m}deg;
        --ry: ${-(e.pageX / innerWidth - 0.5) * m * 2}deg;
    `;

	card.setAttribute('style', style);
});
