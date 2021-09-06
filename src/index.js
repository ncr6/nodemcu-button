const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 5700);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

//routes
app.use('/',require('./routes/push.js'));

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});