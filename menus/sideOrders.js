const { v4: uuid } = require('uuid');

module.exports = [
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'French Fries',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		mediumPrice: 4.99,
		largePrice: 9.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				mediumPriceString: '$4.99',
				largePriceString: '$9.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'Union Rings',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		mediumPrice: 4.99,
		largePrice: 7.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				mediumPriceString: '$4.99',
				largePriceString: '$7.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'Hush Puppies',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		mediumPrice: 4.99,
		largePrice: 7.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				mediumPriceString: '$4.99',
				largePriceString: '$7.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'Mushrooms',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		mediumPrice: 4.99,
		largePrice: 7.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				mediumPriceString: '$4.99',
				largePriceString: '$7.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'Okra',
		durationTime: '30 ~ 40 min',
		smallPrice: 1.99,
		mediumPrice: 4.99,
		largePrice: 7.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$1.99',
				mediumPriceString: '$4.99',
				largePriceString: '$7.99',
			},
		],
	},
	{
		id: uuid(),
		description: 'Side Orders',
		name: 'Cheese Sticks',
		durationTime: '30 ~ 40 min',
		smallPrice: 2.99,
		mediumPrice: 5.99,
		largePrice: 8.99,
		pricing: [
			{
				currency: 'USD',
				smallPriceString: '$2.99',
				mediumPriceString: '$5.99',
				largePriceString: '$8.99',
			},
		],
	},
];
