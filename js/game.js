
/*
 * THE FLOW:
 *	do one of these three things:
 *	encounter() -> advance() -> results() or fail()
 *  results()   -> advance() -> encounter() or fail()
 *	fail()      -> advance() -> encounter()
 */

 /*
you can fail through: 
- having an event decrement your health (die on results screen)
- losing health to upkeep (die on encounter page)

 */

window.onload = function() {

	var Game = function() {
		this.encounter = 0; // id of active encounter
		this.encounters = 0; // total # of encounters succeeded this game
		this.screen = screen.START; // type of page we're on
		this.score = 0; // the player's score
		this.food = 10; // player food
		this.health = 4; // player health, die at -1
	};

	// clears UI text
	function clearText() {
		$('#event-text').text('');
		$('#rip').text('');
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
			case 5: // state house
				state.encounter = 1;
				break;
			default:
				state.encounter = randomEncounter();
				console.log( 'encounter id: ' + state.encounter);
		}
	}

	function isFail() {
		if (state.health < 1) {
			console.log( 'fail' );
			return true;
		}
		return false;
	}

	// decrement player food, if no food, worsen health instead
	function upkeep() {
		if (state.food > 0) {
			state.food--;
		} else {
			state.health--;
		}
	}

	function updateScore(i) {state.score += 10;}

	function displayStatus() {
		$('#score').text(state.score);
		$('#food').text(state.food);
		$('#health').text(health[state.health]);
	}

	// encounter logic
	function encounter() {
		state.screen = screen.ENCOUNTER;
		// get the encounter
		var enc = encounters[state.encounter];
		// display encounter image
		$('#event-img').css('background-image', 'url(img/' + enc.img + ')');
		// display encounter text
		$('#event-text').text(enc.text);
		// display encounter options; disable unused buttons
		var optionCount = enc.options.length;
		$('#options > a').each(function(i,el){
			if (i < optionCount) {
				$(el).removeClass('disable');
				$(el).children( 'p' ).text(enc.options[i].text);
			}
		});
	}

	// results logic
	function results(i) {
		state.screen = screen.RESULTS;
		// get the current encounter
		var enc = encounters[state.encounter];

		// update the score
		updateScore(i);
		// update food and health
		state.food += enc.options[i].food;
		state.health += enc.options[i].health;
		// check if the encounter caused a failure
		if (isFail()) {
			// display fail
			fail(enc.options[i].causeofdeath, i);
			return;
		}
		displayStatus();

		// display results text
		$('#event-text').text(enc.options[i].resulttext);
		// let the player click through to the next encounter
		$('#option-0').removeClass('disable');
		$('#option-0').children( 'p' ).text(wordsForNext[randomVerb()]);
	}

	// fail logic
	function fail(causeofdeath, i) {
		state.screen = screen.FAIL;
		var resultText = '';
		if (i !== null) {
			resultText = encounters[state.encounter].options[i].resulttext;
		}
		// if there's an event result, display it
		$('#event-text').text(resultText);
		// display cause of death
		$('#rip').text('you died of ' + causeofdeath);
		// offer game reset
		$('#option-0').removeClass('disable');
		$('#option-0').children( 'p' ).text('try again?');
	}

	// this fires whenever the player clicks a button
	// i is the index of the option clicked
	function advance(i) {
		
		// reset text on screen
		clearText();

		if (state.screen !== screen.FAIL) {
			// upkeep (decrement food or health)
			upkeep();
			displayStatus();
			if (isFail()) {
				// if the chosen option would've killed the player, make that happen instead
				// this is dumb and bad programming
				var causeOfDeath = encounters[state.encounter].options[i].causeofdeath;
				if (typeof causeOfDeath != "undefined") {
					fail(causeOfDeath, i);
				} else {
					fail('starvation', null);
				}
				return;
			}
		}

		// decide our next screen
		switch (state.screen) {

			// clicked from fail ("try again")
			case screen.FAIL:
				state = new Game();
				displayStatus();
				encounter();
				break;

			// clicked from an encounter
			case screen.ENCOUNTER:
				// display results
				results(i);
				break;

			// clicked from the start page
			case screen.START:

			// clicked from a results page
			case screen.RESULTS:
				// get new encounter
				getNextEncounter();
				// display new encounter
				encounter();
				break;
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
		encounter();
	}

	var state = new Game();
	displayStatus();
	main();
};