var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EmployeeSchema   = new Schema({    
    employeeId:String,
    firstName: String,
    lastName: String,
    email: String,
    gender:String,
    dob : Date,
    password:String,
    phone: String,
    address:String,
    salary:String,
    doj:Date,
    role:String
});

module.exports = mongoose.model('Employee', EmployeeSchema);