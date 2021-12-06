let express = require("express")
//const { appendFile } = require("fs")
let mongoose = require("mongoose")
let EmployeeModel = require("./models/Employee")
//let poster = require('Ass')

let app = express()

mongoose.connect("mongodb+srv://dbJeff:Midnight@cluster0.bnp1v.mongodb.net/100681357_assignment2?retryWrites=true&w=majority",
{
    usenewUrlparser:true,
    useUnifiedTopology:true
})

app.get("/", (req, res) => {
    res.send("<h1>Backend testing begining here!</h1>,<button>clickme</button>")
    res.send("")
})
//adding empolyee
// app.post("/employees" , async(req,res)=>{
    
//     let s = {
//         Id: 102564456,
//         firstName: 'Mike',
//         lastName:'Daneals',
//         emailId: 'MikeD@rogers.com'
//     }
//     let new_employee = new EmployeeModel(s)
//     try{
//         await new_employee.save(s)
//         res.send(new_employee)
//         console.log("post test for backend: try component")
//     }catch(err){
//         res.status(500).send(err)
//     }
// });
//second adder, query string 
// http://localhost:8089/employee?idinput=100552277&F_name=Jeffrey&L_name=Rockburn&Emails=c@c.com
app.post("/employee" , async(req,res)=>{
    let idinput= req.query.idinput
    let F_name = req.query.F_name
    let L_name = req.query.L_name
    let Emails = req.query.Emails

    let s = {
        Id: idinput,
        firstName:F_name,
        lastName:L_name,
        emailId: Emails
    }

    let new_employee = new EmployeeModel(s)
    try{
        await new_employee.save(s)
        res.send(new_employee)
        console.log("post test for backend: try component")
    }catch(err){
        res.status(500).send(err)
    }

    
});


//viewing all
app.get('/employee',async(req,res)=>{
    const employees = await EmployeeModel.find({});
    try{
        res.send(employees)
        console.log("GET actived")
    }catch(err){
        res.status(500).send(err)
    }
})
//viewing 1
app.get('/employee/:Id',async(req,res)=>{
    const employees = await EmployeeModel.find({Id: {$eq:req.params.Id} });

    try{
        if(employees.length !== 0){
            res.send(employees)
            console.log('ID retreved')
        }else{
            res.send(JSON.stringify({status:false, message:"no data"}))
        }
    }catch(err){
        res.status(500).send(err)
        console.log("didn't work")
    }
    
})
//update
//doesn't work
// http://localhost:8089/employee/100561450?idinput2=103442277&F_name=Williem&L_name=Barns&Emails=d@d.com
app.put('/employee/:Id',async(res,req)=>{     
    //const employees = await EmployeeModel.updateOne({firstName: 'Billy'})

    // let idinput2= req.query.idinput2
    // let F_name = req.query.F_name
    // let L_name = req.query.L_name
    // let Emails = req.query.Emails
    // // let s = {
    // //     Id: idinput2,
    // //     firstName:F_name,
    // //     lastName:L_name,
    // //     emailId: Emails
    // // }

    const employees = await EmployeeModel.updateOne({Id:103442277},{firstName: 'Williem'},
        {LastName:'Barns'},{emailId: 'd@d.com'})
    try{       
        console.log("update might work!")
        res.send(employees)

    }catch(err){
        //res.status(500).send(err)
        console.log("it did not")

    }

})

//delete
app.delete('/employee/:Id' ,async(req,res)=>{
    const employees = await EmployeeModel.deleteOne({Id: {$eq:req.params.Id}})
    //const employees = await EmployeeModel.remove({firstName: 'Tim'})
    console.log(" running at least")
    try{
                
        console.log("hope this works!")
        res.send(employees)        
    }catch(err){
        res.status(500).send(err)
        console.log("it did not")

    }
    




})

app.listen(8089,()=>{
    console.log("server runing at http://localhost:8089/")
})

module.exports = app