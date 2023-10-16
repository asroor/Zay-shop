const { Router } = require('express');
const router = Router();
const homeControlPage = require('../controller/homeControls')

router.get('/', homeControlPage);

module.exports = router