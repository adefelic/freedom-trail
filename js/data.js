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
				isFail: false,
				nextEncounter: null
			},
			{
				text: 'Ignore the Bunker Hill Monument and move on',
				resulttext: 'life is too short for phallic memorials',
				isFail: false,
				nextEncounter: null
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
				isFail: false,
			},
			{
				text: 'admire the greenery',
				resulttext: 'smells like it was just cut, mmm',
				isFail: false,
			},
			{
				text: 'go home',
				resulttext: 'so long! we hope you enjoyed the sights and perils of the FREEDOM TRAIL!',
				isFail: false,
			},
		]
	},
	{
		img: 'bear.jpg',
		text: 'oh no there is a bear',
		options: [
			{
				text: 'fight the bear',
				resulttext: 'rip you die',
				isFail: true,
			},
			{
				text: 'run away',
				resulttext: 'the bear was too fast',
				isFail: true,
			},
			{
				text: 'close your eyes',
				resulttext: 'it worked!',
				isFail: false,
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
				isFail: false,
			},
			{
				text: 'steal the money',
				resulttext: 'claws so sharp',
				isFail: true,
			},
			{
				text: 'flaunt your own wealth',
				resulttext: 'now the cat is jealous',
				isFail: true,
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
