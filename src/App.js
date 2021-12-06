//import logo from './logo.svg';
import './App.css';
import ViewEmployee from './View-Employee';
//import axios from 'axios';
// import { Mongoose } from 'mongoose';


function App() {
  
  return (
    <div>
      <h1>Front end Assignment 2</h1>
      <button>Add employee</button>
      
      <button>Update employee</button>
      
      <button>Delete employee</button>
      
      <button onClick = {ViewEmployee} >View all Empolyees</button>
      <ViewEmployee/>

      <button>View Single Empolyee</button>

    </div>
  );
}

export default App;
