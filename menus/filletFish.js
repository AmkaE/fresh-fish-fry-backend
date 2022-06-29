const { v4: uuid } = require('uuid');

module.exports = [
	{
		id: uuid(),
		description: '',
		name: 'Orange Roughy',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 5.79,
		dinnerPrice: 10.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$5.79',
				dinnerPriceString: '$10.99',
			},
		],
	},
	{
		id: uuid(),
		description: '',
		name: 'Pickerel (Walleye)',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 5.79,
		dinnerPrice: 10.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$5.79',
				dinnerPriceString: '$10.99',
			},
		],
	},
];
