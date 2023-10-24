const { aboutControl } = require('../controller/aboutControl');
const { Router } = require('express');
const router = Router();

router.get('/about', aboutControl);

module.exports = router