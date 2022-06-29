const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
let menus = require('../menus/menus');

// display menus names
router.get('/', (req, res) => {
	res.json(menus);
});

module.exports = router;
