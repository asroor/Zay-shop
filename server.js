const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const exphbs = require('express-handlebars');
// Routes imports
const homeRoutes = require('./routes/homeRoutes');
const shopRoutes = require('./routes/shopRouter');

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Initalize engen template (Handlebars)
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs');
app.set('views', './views');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes use && Initialize Routes
app.use('/', homeRoutes);
app.use('/shop', shopRoutes);

// Server PORT = dotenv
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`SERVER: ${PORT}`);
})