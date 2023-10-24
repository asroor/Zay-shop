const { Router } = require('express');
const router = Router();
const { getShop, addShop, addNewShop, getOneShop } = require('../controller/shopControls');
const { upload } = require('../utils/shopImgUpload');

router.get('/shop', getShop);
router.get('/shop/add', addShop);
router.get('/shop/:id', getOneShop);
router.post('/shop/add', upload.single('shop_image'), addNewShop);

module.exports = router;