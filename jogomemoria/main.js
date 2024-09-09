function comeca() {

	const cardBoard = document.querySelector("#cardboard");
	const images = [
    'reino1.png',
    'lotus.png',
    'ar.png',
    'terra.png',
    'agua.png',
    'fogo.png'

];

	let cardHTML = ' ';

	images.forEach(img => {
		cardHTML += `<div class="memory-card" data-card="${img}">
                     <img class="frente" src="img/${img}">
                     <img class="costas" src="img/capa.png">           
                </div>
                `;
	});

	cardBoard.innerHTML = cardHTML + cardHTML;





	const cards = document.querySelectorAll('.memory-card');
	let carta1, carta2;
	let block = false;
	let p = 0;

	function flipCard() {
		if (block) return false;
		this.classList.add('flip');
		if (!carta1) {
			carta1 = this;
			return false
		}
		carta2 = this;
		verifica();
	}


	function verifica() {
		let sim = carta1.dataset.card === carta2.dataset.card;
		if (sim) {
			p++;
		}
		if (p == 6) {
			setTimeout(() => {
				alert("Parabens, você completou o jogo");
			}, 500);



		}!sim ? volta() : reset(sim);
	}

	function volta() {
		block = true;
		setTimeout(() => {
			carta1.classList.remove('flip');
			carta2.classList.remove('flip');

			reset();

		}, 1000);


	}
	(function aleatorio() {
		cards.forEach(card => {
			let random = Math.floor(Math.random() * 12);
			card.style.order = random;
		})
	})();



	function reset(sim = false) {
		if (sim) {
			carta1.removeEventListener('click', flipCard);
			carta2.removeEventListener('click', flipCard);
		}
    [carta1, carta2, block] = [null, null, false];
	}

	cards.forEach(card => card.addEventListener('click', flipCard));
}
