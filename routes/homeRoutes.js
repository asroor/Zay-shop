const { Router } = require('express');
const router = Router();
const { getHome } = require('../controllers/homeControl')

router.get('/', getHome);

module.exports = router;