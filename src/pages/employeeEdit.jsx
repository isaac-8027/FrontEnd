// import "./createEmployee.scss";
// import Inputs from "../src/components/Inputs";
// import SelectionField from "../src/components/SelectionField";
// import Button from "../src/components/Button";
// import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

const EmployeeEdit=()=>{
  let disable=true;
    const  employees=
        {
            name:"Isaac",
            id:"454545",
            date:"12/06/2023",
            role:"Software Developer",
            department:"FrontEnd",
            status:"Active",
            experiance:"2 years",
            address:"mvpa",
            

        }
        
    
    let{id}=useParams();
    console.log(id);
    return(
        <main>
        <div className="main-body">
          <section className="big-header">
            <h1>Edit Employee</h1>
          </section>
          <section className="input-section">
            <Form 
            
            
            employees={employees}
            idDisable={disable}
             />
                
  
            
  
          </section>
        </div>
      </main>


    )
}
export default EmployeeEdit;
