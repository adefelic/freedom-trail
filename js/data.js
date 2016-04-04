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
		img: 'start.jpg',
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
				resulttext: 'now the cat is jealous and took some food',
				health: 0,
				food: -1,
				causeofdeath: 'starvation'
			},
		]
	}
];

var wordsForNext = [
	'next!',
	'onwards!',
	'where to?',
	'anyways,',
	'moving on,'
];

var health = [
	'dead',
	'very poor',
	'poor',
	'fair',
	'good'
];

var screen = {
	ENCOUNTER: 0,
	RESULTS: 1,
	FAIL: 2,
	START: 3
};

