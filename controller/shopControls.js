const { addNewPostDB } = require('../db/posters');
const { v4 } = require('uuid');
const getShop = (req, res) => {
    res.status(200).render('./shop/shop', {
        title: "Zay shop - Products",
        URL: process.env.URL
    })
};
const addShop = (req, res) => {
    res.render('./shop/add-shop', {
        title: "Add Shop",
        URL: process.env.URL
    })

};
const addNewShop = async (req, res) => {
    const shop = {
        id: v4(),
        shop_image: req.body.shop_image,
        shop_title: req.body.shop_title,
        size_M: req.body.size_M,
        size_L: req.body.size_L,
        size_XL: req.body.size_XL,
        size_XXL: req.body.size_XXL,
        shop_price: req.body.shop_price,
        disc: req.body.disc,
    }
    await addNewPostDB(shop);
    res.redirect('/shop/add');
}
module.exports = {
    getShop,
    addShop,
    addNewShop
};