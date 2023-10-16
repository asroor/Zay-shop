const { Router } = require('express');
const router = Router();
const homeControlPage = require('../controls/homeControls')

router.get('/', homeControlPage);

module.exports = router