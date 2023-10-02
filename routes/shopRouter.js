const { Router } = require('express');
const router = Router();
const { getShop, addNewShop, addNewShopPage } = require('../controllers/shopControl');

router.get('/', getShop);
router.get('/add', addNewShopPage);
router.post('/add', addNewShop);

module.exports = router;