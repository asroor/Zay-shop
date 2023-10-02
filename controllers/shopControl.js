// @route		GET '/shop'
// @desc		get all shop lists
// @access	public

const getShop = (req, res) => {
	res.render('shop/shop', {
		title: 'Zay Shop - Product Listing',
		URL: process.env.URL
	})
}
//  Add new Shop page
const addNewShopPage = (req, res) => {
	res.render('shop/add-shop', {
		title: 'add new shop',
		URL: process.env.URL
	});
}

const addNewShop = (req, res) => {
	console.log(req.body);
	// res.end(alert('Yangi mahsulot qo\'shildi'))
}
module.exports = {
	getShop,
	addNewShop,
	addNewShopPage,
}