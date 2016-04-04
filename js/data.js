/*
 * encounters:
 * 0: bunker hill
 * 1: uss constitution
 * 2: 
 *
 */

var encounters = [
	{
		img: 'bunker-hill-monument.png',
		title: 'The Bunker Hill Monument',
		text: 'Here you are, at the start of Boston\'s famous FREEDOM TRAIL. Good Luck!',
		options: [
			{
				text: 'Look at the Bunker Hill Monument',
				resulttext: '"Don\'t fire until you see the whites of their eyes" is the legendary order attributed to Colonel William Prescott to make sure that each shot would count. The poorly trained and ill prepared colonial forces repelled two major assaults by the British Army before retreating. Almost half of the British soldiers were either killed or injured. Although the colonists lost the battle, their bravery and strong showing against the British encouraged them to fight on.',
				health: 0,
				food: 0
			},
			{
				text: 'Ignore the Bunker Hill Monument and move on',
				resulttext: 'Instead of scoping the monument, you go to the Cookie Monstah food truck that\'s a few feet from the monument. This was the right choice.',
				health: 0,
				food: 4
			},
		]
	},
	{
		img: 'boston-common.png',
		title: 'The Boston Common',
		text: 'You\'ve made it to the end of the trail! check out that sweet statue. wait, how did you get here again?',
		options: [
			{
				text: 'Admire the statue',
				resulttext: 'The attention to detail is striking.',
				health: 0,
				food: 0
			},
			{
				text: 'Admire the greenery',
				resulttext: 'The smell of freshly cut grass invigorates you.',
				health: 1,
				food: 0
			},
			{
				text: 'Go home',
				resulttext: 'So long! We\'re sure you parked somewhere obvious, and will have no difficulty finding your car.',
				health: 0,
				food: 0
			},
		]
	},
	{
		img: 'bear.jpg',
		title: 'A bear!',
		text: 'oh no there is a bear',
		options: [
			{
				text: 'fight the bear',
				resulttext: 'didn\'t work!',
				health: -1,
				food: 0,
				causeofdeath: 'bear'
			},
			{
				text: 'run away',
				resulttext: 'the bear was too fast',
				health: -1,
				food: 0,
				causeofdeath: 'bear'
			},
			{
				text: 'close your eyes',
				resulttext: 'it worked!',
				health: 0,
				food: 0
			},
		]
	},
	{
		img: 'cat.jpg',
		title: 'A fat cat',
		text: 'a wealthy kitten!',
		options: [
			{
				text: 'pet the cat',
				resulttext: 'purr purr purr',
				health: 0,
				food: 0
			},
			{
				text: 'steal the money',
				resulttext: 'claws so sharp',
				health: -1,
				food: 0,
				causeofdeath: 'cat'
			},
			{
				text: 'flaunt your own wealth',
				resulttext: 'now the cat is jealous and took some of your hard-earned food',
				health: 0,
				food: -1,
				causeofdeath: 'starvation'
			},
		]
	},
	{
		img: 'old-state-house.png',
		title: 'The Old State House',
		text: 'Grab your camera, it\'s the OLD STATE HOUSE,',
		options: [
			{
				text: 'Grab your camera',
				resulttext: 'dad\'s going to love these photos',
				health: 1,
				food: 0
			},
			{
				text: 'I love history!',
				resulttext: 'The Old State House was the center of all political life and debate in colonial Boston. On July 18, 1776, citizens gathered in the street to hear the Declaration of Independence read from the building\'s balcony, the first public reading in Massachusetts. The Royal Governor presided here until Thomas Gage left in 1775, and the seat of Massachusetts government resided here until the new State House was built on Beacon Hill in 1798.',
				health: 0,
				food: 0,
			},
			{
				text: 'I hate history!',
				resulttext: 'Your ignorance wounds you.',
				health: -1,
				food: 0,
				causeofdeath: 'not respecting this great city'
			},
		]
	},
	{
		img: 'storrowed.jpg',
		title: 'Storrow Drive: Cars Only',
		text: 'Looks like another truck driver didn\'t read the signs.',
		options: [
			{
				text: 'Some flying wreckage gets you right in the gut.',
				resulttext: 'And here we thought Boston drivers were the worst...',
				health: -1,
				food: 0,
				causeofdeath: 'a storrowing'
			},
		]
	},
	{
		img: 'chipotle-boston.jpg',
		title: 'The Old Corner Bookstore',
		text: 'The Old Corner Bookstore was the publisher of many famous books, like Nathaniel Hawthorne\'s "The Scarlet Letter," or Henry David Thoreau\'s contemplative "Walden."\n Now it\'s a Chipotle!',
		options: [
			{
				text: 'Dig into a hot, fresh Chipotle burrito; one with all of your favorite toppings.',
				resulttext: 'The burrito was as filling as it was infectious. Don\'t worry, the virus will take day or two to really kick in, so you\'ve still got time to see the rest of this great city! Probably!',
				health: -1,
				food: 6,
				causeofdeath: 'norovirus'
			},
		]
	},
	{
		img: 'snow.jpg',
		title: '\'Snow Problem',
		text: 'You can tell it\'s spring in Boston when the leaves start to bud, and crashing deluges of snow and ice fall from every cloud.',
		options: [
			{
				text: 'When does it warm up around here??',
				resulttext: 'Every other day until July.',
				health: -1,
				food: 0,
				causeofdeath: 'an average New England winter'
			},
		]
	}
];

var wordsForNext = [
	'next!',
	'onwards!',
	'where to?',
	'anyways,',
	'moving on,',
	'now where were we...',
	'anywho,',
	'I think the next stop was ... this way?',
	'I think I\'m lost, who planned this city?',
	'wait, which Dunkin Donuts was I supposed to take a left at?'
];

var health = [
	'dead',
	'very poor',
	'poor',
	'fair',
	'good',
	'great',
	'amazing',
	'you are vitality itself',
	'tom brady is jealous'
];

var screen = {
	ENCOUNTER: 0,
	RESULTS: 1,
	FAIL: 2,
	START: 3
};

