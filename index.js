const express = require('express');
const path = require('path');
const router = require('./routes');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'layout',
    extname: '.handlebars'
}));

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router());

app.listen(5000, () => {
    
});
