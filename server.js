require('./model/DB');

const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars')

//const hbs = require('hbs')

const employeeController = require('./controllers/employeeController')

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());



app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', handlebars: allowInsecurePrototypeAccess(Handlebars), layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');



app.listen(3000, () => { console.log("Express server started at port : 3000");});

app.use('/employee', employeeController);