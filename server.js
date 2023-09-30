const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const exphbs = require('express-handlebars');

// exphbs engen 
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs');
app.set('views', './views');

// PUBLIC 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('home', { title: 'Zay Shop' });
});
app.get('/shop', (req, res) => {
	res.render('shop', { title: 'Zay Shop - Product Listing' })
})
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`SERVER: ${PORT}`);
})