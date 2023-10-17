const { Router } = require('express');
const router = Router();
const { getShop, addShop, addNewShop, getOneShop } = require('../controller/shopControls');

router.get('/shop', getShop);
router.get('/shop/add', addShop);
router.get('/:id', getOneShop);
router.post('/shop/add', addNewShop);

module.exports = router;