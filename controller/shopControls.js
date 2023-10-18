const { addNewPostDB, getAllData, getShopID } = require('../db/posters');
const { v4 } = require('uuid');

// @route   GET /shop
// @desc    Get all shop posts
// access: public
const getShop = async (req, res) => {
	const data = await getAllData();
	console.log(data);
	res.status(200).render('./shop/shop', {
		title: "Zay shop - Products",
		shop: data,
		URL: process.env.URL
	})
};

// @route   GET /shop/add
// @desc    Get adding poster page
// access: private
const addShop = (req, res) => {
	res.render('./shop/add-shop', {
		title: "Add Shop",
		URL: process.env.URL
	})

};

// @route   POST /shop/add
// @desc    Add new post
// access: private
const addNewShop = async (req, res) => {
	const shop = {
		id: v4(),
		shop_image: req.body.shop_image,
		shop_title: req.body.shop_title,
		size: req.body.size,
		shop_price: req.body.shop_price,
		disc: req.body.disc,
	}
	await addNewPostDB(shop);
	res.redirect('/shop/add');
}

const getOneShop = async (req, res) => {
	console.log('Loading.....');
	const shop = await getShopID(req.params.id);
	console.log('Data loaded');
	res.render('shop/shop-single', {
		shop,
		URL: process.env.URL
	});
}
module.exports = {
	getShop,
	addShop,
	addNewShop,
	getOneShop
};