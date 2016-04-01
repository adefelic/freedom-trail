window.onload = function() {

	var Game = function() {};
	// the id of the current encounter
	Game.prototype.encounter = 0;
	Game.prototype.encounters = 0;
	Game.prototype.inEncounter = true; // encounter page or results page?
	// the player's score
	Game.prototype.score = 0;
	// is the game over?
	Game.prototype.gameOver = false;

	function score(i) {
		if ( ! encounters[state.encounter].options[i].isFail ) {
			state.score += 10;
		} else {
			state.gameOver = true;
		}
	}
	function displayScore() {
		$('#score').text(state.score);
	}

	// display encounter information
	function displayEncounter() {
		clearText();
		// get the encounter
		var enc = encounters[state.encounter];

		// display the encounter image
		$('#event-img').css('background-image', 'url(img/' + enc.img + ')');

		// display the encounter text
		$('#event-text').text(enc.text);

		// give them options some text
		// disable unused buttons while we're in there
		var optionCount = enc.options.length;
		$('#options > a').each(function(i,el){
			if (i < optionCount) {
				$(el).removeClass('disable');
				$(el).children( 'p' ).text(enc.options[i].text);
			}
		});
	}

	// display the results of the encounter
	function displayResults(i) {
		clearText();
		// display the result of the player's decision
		var enc = encounters[state.encounter];
		$('#event-text').text(enc.options[i].resulttext);

		if (state.gameOver) {
			// go to fail screen, offer reset.
			$('#option-0').removeClass('disable');
			$('#option-0').children( 'p' ).text('you die');
			state.score = 0;
			displayScore();
			state.gameOver = false;
		} else {
			// let the player click through to the next encounter
			$('#option-0').removeClass('disable');
			$('#option-0').children( 'p' ).text(wordsForNext[randomVerb()]);
		}
	}

	// clears UI text
	function clearText() {
		$('#event-text').text('');
		$('#options > a').each(function(i,el){
			$(el).addClass('disable');
			$(el).children( 'p' ).text('');
		});
	}

	// get a random encounter that we haven't already gotten
	function randomEncounter() {
		return Math.floor((Math.random() * encounters.length));
	}

	function randomVerb() {
		return Math.floor((Math.random() * wordsForNext.length));
	}

	// get the next encounter; either a critical path encounter or a random one.
	function getNextEncounter() {
		switch (++state.encounters) {
			case 5: // uss constitution
				state.encounter = 1;
				break;
			default:
				state.encounter = randomEncounter();
				console.log( 'encounter id: ' + state.encounter);
		}
	}

	// the player clicks: go to an encounter or a results page
	function advance(i) {
		if (state.gameOver === true) {
			state = new Game();
			return;
		}
		switch (state.inEncounter) {
			case true:
				state.inEncounter = false;
				score(i);
				displayScore();
				displayResults(i);
				break;
			case false:
				state.inEncounter = true;
				getNextEncounter();
				displayEncounter();
				break;
			default:
				// ???
		}
	}

	function initClickHandlers() {
		$('#options > a').each(function(i,el){
			$(el).click(function(){ advance(i); });
		});
	}

	// Start!
	function main() {
		initClickHandlers();
		// display the first encounter
		displayEncounter();
	}

	var state = new Game();
	main();
};