const { Router } = require('express');
const router = Router();
const shopControlPage = require('../controls/shopControls');

router.get('/shop', shopControlPage);

module.exports = router;