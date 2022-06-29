const { v4: uuid } = require('uuid');

module.exports = [
	{
		id: uuid(),
		description: 'Wings and Fried Wings',
		name: '10PC',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 7.99,
		dinnerPrice: 7.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$7.99',
				dinnerPriceString: '$7.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Wings and Fried Wings',
		name: '20PC',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 15.99,
		dinnerPrice: 15.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$15.99',
				dinnerPriceString: '$15.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Wings and Fried Wings',
		name: '40PC',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 30.99,
		dinnerPrice: 30.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$30.99',
				dinnerPriceString: '$30.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Wings and Fried Wings',
		name: '60PC',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 47.99,
		dinnerPrice: 47.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$47.99',
				dinnerPriceString: '$47.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Wings and Fried Wings',
		name: '80PC',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 63.99,
		dinnerPrice: 63.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$63.99',
				dinnerPriceString: '$63.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Wings and Fried Wings',
		name: '100PC',
		durationTime: '30 ~ 40 min',
		sanwichPrice: 78.99,
		dinnerPrice: 78.99,
		pricing: [
			{
				currency: 'USD',
				sanwichPriceString: '$78.99',
				dinnerPriceString: '$78.99',
			},
		],
	},
];
