const homeControlPage = (req, res) => {
    res.render('home', {
        title: "Zay shop",
        URL: process.env.URL
    });
};

module.exports = homeControlPage 