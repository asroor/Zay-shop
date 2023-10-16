const shopControlPage = (req, res) => {
    res.status(200).render('./shop/shop', {
        title: "Zay shop - Products",
        URL: process.env.URL
    })
};

module.exports = shopControlPage;