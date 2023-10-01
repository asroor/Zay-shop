// @route		GET '/shop'
// @desc		get all shop lists
// @access	public

const getShop = (req, res) => {
	res.render('shop', {
		title: 'Zay Shop - Product Listing'
	})
}

module.exports = {
	getShop
}