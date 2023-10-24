const aboutControl = (req, res) => {
	res.render('about', {
		title: 'Zay shop - About',
		URL: process.env.URL
	})
};

module.exports = {
	aboutControl
}