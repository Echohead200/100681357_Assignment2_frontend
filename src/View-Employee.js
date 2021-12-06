import React, { Component,Fragment } from 'react'
import axios from 'axios' 

//let express = require("express")
//let A = require("/100681357_assignment2_backend.js") 
//const mongoose = require("mongoose")

//let EmployeeModel = require("./models/Employee")


export default class ViewEmployee extends Component{

    



    constructor(props) {
        super(props)
    
        this.state = {
             empolyeeData : null,
             //userid: 0
        }
    }

    // callbackend(){
    //     A
    // }

    componentDidMount=()=>{
        console.log("help!")
        //script.src = 
        this.getEmployeeData()
    }




    getEmployeeData = () =>{
        console.log("this ran")
        //Access-Control-Allow-Origin: https://amazing.site
        //axios.get("http://localhost:8089/employee")
        axios.get("mongodb+srv://dbJeff:Midnight@cluster0.bnp1v.mongodb.net/100681357_assignment2?retryWrites=true&w=majority")
        .then(response => {
            console.log("code block is displaying")
            console.log(response.data)
            this.setState({...this.state, empolyeeData : response.data })
        })
        .catch(err=> console.log("this error here:" + err))
    }



render() {
    return(
        <div>
            <h1>Did it work?</h1>
            {console.log("render works")}
            

            <button onClick={() => this.getEmployeeData}> get Data</button>
            {
                
                    this.state.empolyeeData == null?<p>no data</p>:this.state.empolyeeData.employees.map(employees=>
                        <>
                        <p>Employee ID {employees.Id}</p>
                        <p>First Name {employees.firstName}</p>
                        <p>Last Name{employees.lastName}</p>
                        <p>Email {employees.emailId}</p>
    
                        </>
                        ) 
            }   
           
        </div>

    )
}

}