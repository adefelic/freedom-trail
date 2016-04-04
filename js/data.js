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
		text: 'You are a settler, who must make their way through Boston\'s famous FREEDOM TRAIL. Good Luck!',
		options: [
			{
				text: 'Look at the Bunker Hill Monument',
				resulttext: 'sure is big',
				health: 0,
				food: 0
			},
			{
				text: 'Ignore the Bunker Hill Monument and move on',
				resulttext: 'life is too short for phallic memorials',
				health: 0,
				food: 0
			},
		]
	},
	{
		img: 'boston-commons.png',
		text: 'you made it to the end of the trail! check out that sweet statue',
		options: [
			{
				text: 'admire the statue',
				resulttext: 'the attention to detail is striking',
				health: 0,
				food: 0
			},
			{
				text: 'admire the greenery',
				resulttext: 'smells like it was just cut, mmm',
				health: 0,
				food: 0
			},
			{
				text: 'go home',
				resulttext: 'so long! we hope you enjoyed the sights and perils of the FREEDOM TRAIL!',
				health: 0,
				food: 0
			},
		]
	},
	{
		img: 'bear.jpg',
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
		text: 'grab your camera, it\'s the OLD STATE HOUSE,',
		options: [
			{
				text: 'grab your camera',
				resulttext: 'dad\s going to love these photos',
				health: 1,
				food: 0
			},
			{
				text: 'I hate history >:(',
				resulttext: 'not by the end of this journey you won\'t!',
				health: -1,
				food: 0,
				causeofdeath: 'not respecting this great city'
			},
			{
				text: 'I love history :D',
				resulttext: 'The Old State House was the center of all political life and debate in colonial Boston. On July 18, 1776, citizens gathered in the street to hear the Declaration of Independence read from the building\'s balcony, the first public reading in Massachusetts. The Royal Governor presided here until Thomas Gage left in 1775, and the seat of Massachusetts government resided here until the new State House was built on Beacon Hill in 1798.',
				health: 0,
				food: 0,
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
	'I think the next stop was ... this way?'
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

