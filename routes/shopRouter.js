const { Router } = require('express');
const router = Router();
const { getShop } = require('../controllers/shopControl');

router.get('/', getShop);

module.exports = router;