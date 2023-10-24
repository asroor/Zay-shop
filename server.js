const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const helmet = require('helmet');
const homeRouter = require('./routes/homeRouter');
const shopRouter = require('./routes/shopRouter');
const aboutRouter = require('./routes/aboutRouter');

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
process.env.NODE_ENV !== 'production' && 'production' !== process.env.TZ ? 'development' : 'production';
if (app.get('env') === 'development') {
	app.use(morgan('tiny'));
	console.log('Morgan: DEV');
};
app.use(helmet())
// Initalize engen template (Handlebars)
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs');
app.set('views', './views');

// Set static folder
app.use(express.static(path.join(__dirname, './public')));

// Routes use && Initialize Routes
app.use(homeRouter);
app.use(shopRouter);
app.use(aboutRouter);

// Server PORT = dotenv
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`SERVER: ${PORT}`);
});