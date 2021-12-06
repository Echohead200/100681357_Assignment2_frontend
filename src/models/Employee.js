let mongoose = require('mongoose')



const EmployeeSchema = new mongoose.Schema({

    Id: Number,
    firstName: String,
    lastName: String,
    emailId:{
        type:String
    }

})
const Employee = mongoose.model('employee',EmployeeSchema)
module.exports = Employee