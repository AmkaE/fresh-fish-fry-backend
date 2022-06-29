const { v4: uuid } = require('uuid');

module.exports = [
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'Potato Salad',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		largePrice: 2.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				largePriceString: '$2.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'macaroni Salad',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		largePrice: 2.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				largePriceString: '$2.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'Colesclaw',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		largePrice: 2.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				largePriceString: '$2.99',
			},
		],
	},
];
