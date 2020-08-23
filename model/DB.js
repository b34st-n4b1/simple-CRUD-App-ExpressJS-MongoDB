const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
    if(!err) {console.log('Mongodb connection Succeeded')}
    else { console.log('Error in DB Conection' + err)}
    
});

require('./employee.model')