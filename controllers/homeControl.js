const getHome = (req, res) => {
	res.render('home', {
		title: 'Zay shop',
	})
}

module.exports = {
	getHome
}