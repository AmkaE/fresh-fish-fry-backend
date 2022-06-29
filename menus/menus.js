const { v4: uuid } = require('uuid');
const filletFish = require('./filletFish');
const crackWings = require('./crackWings');
const creckMixedPieces = require('./crackMixedPieces');
const crackDrumsticks = require('./crackDrumsticks');
const crackTenders = require('./crackTenders');
const sideOrders = require('./sideOrders');
const salads = require('./salads');

module.exports = [
	{
		menu_id: uuid(),
		menu_name: 'Fillet Fish (Boneless)',
		menu_sections: [
			{
				description: 'Dinner Includes Coleslaw, Fries and Bread',
				menu_items: filletFish,
				section_name: 'Fish',
			},
		],
	},
	{
		menu_id: uuid(),
		menu_name: 'Crack Wings',
		menu_sections: [
			{
				description: 'Dinner Includes Coleslaw, Fries and Bread',
				menu_items: crackWings,
				section_name: 'Wings',
			},
		],
	},
	{
		menu_id: uuid(),
		menu_name: 'Crack Mixed Pieces',
		menu_sections: [
			{
				description: 'Dinner Includes Coleslaw, Fries and Bread',
				menu_items: creckMixedPieces,
				section_name: 'Wings',
			},
		],
	},
	{
		menu_id: uuid(),
		menu_name: 'Crack Drumsticks',
		menu_sections: [
			{
				description: 'Dinner Includes Coleslaw, Fries and Bread',
				menu_items: crackDrumsticks,
				section_name: 'Wings',
			},
		],
	},
	{
		menu_id: uuid(),
		menu_name: 'Crack Tenders',
		menu_sections: [
			{
				description: 'Dinner Includes Coleslaw, Fries and Bread',
				menu_items: crackTenders,
				section_name: 'Wings',
			},
		],
	},
	{
		menu_id: uuid(),
		menu_name: 'Side Orders',
		menu_sections: [
			{
				description: 'Dinner Includes Coleslaw, Fries and Bread',
				menu_items: sideOrders,
				section_name: 'Side Orders',
			},
		],
	},
	{
		menu_id: uuid(),
		menu_name: 'Salads',
		menu_sections: [
			{
				description: 'Dinner Includes Coleslaw, Fries and Bread',
				menu_items: salads,
				section_name: 'Salads',
			},
		],
	},
];
