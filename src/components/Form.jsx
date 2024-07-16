import Inputs from "./Inputs";
import SelectionField from "./SelectionField";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import EmployeeEdit from "../pages/employeeEdit";
const Form=({employees,onClickPrimary,idDisable})=>{
    // console.log(employees);
    const createInEmployeeForm=()=>{
      onClickPrimary(states)
    }




    const disabler={idDisable};
    const roleOptions = [
        "Software Developer",
        "Devops Engineer",
        "UI/UX Designer",
      ];
      const departmentOptions = [
        "FrontEnd",
        "BackEnd",
        "FullStack ",
      ];
      
      
      const [states, setStates] = useState({
        name: "",
        id: "",
        date: "",
        role: "",
        department:"",
        status: "",
        experiance: "",
        address: ""
      });
      
      useEffect(()=>{
        setStates(employees||{}
        )}
        ,[employees]);
      const changedVal = {};
      const handleChange = (e) => {
        
        changedVal[e.target.name] = e.target.value;
        setStates((states) => ({
          ...states,
          ...changedVal,
        }));
      };
      




      
      const statusOptions = ["Active", "Inactive", "Standby"];
      const fields = [
        {
          type: "text",
          id: "name",
          placeholder: "Name",
          name: "Employee Name",
         
        },
        {
          type: "number",
          id: "id",
          placeholder: "000000",
          name: "Employee ID",
          disable:disabler.idDisable
          
          
          
        },
        {
          type: "date",
          id: "date",
          placeholder: "Joining Date",
          name: "Joining Date",
          
        },
        {
          type: "text",
          id: "email",
          placeholder: "Name",
          name: "Employee Name",
         
        },
        {
          id: "role",
          name: "role",
          defaulString: "Choose Role",
          options: roleOptions,
          Component: SelectionField,
        },
        {
          id: "department",
          name: "Department",
          defaulString: "Choose Department",
          options: departmentOptions,
          Component: SelectionField,
        },
        {
          id: "status",
          name: "Status",
          defaulString: "Status",
          options: statusOptions,
          Component: SelectionField,
        },
        {
          type: "text",
          id: "experiance",
          placeholder: "Experiance",
          name: "Experiance",
         
        },
        {
          type: "text",
          id: "address",
          placeholder: "Address",
          name: "Address",
          
        },
      ];
     
    
    
    
    return(
    <form className="input-form">
<div className="input-part">
  {fields.map((field) => {
    return field.Component ? (
      <field.Component
        key={field.name}
        defaulString={field.defaulString}
        id={field.id}
        options={field.options}
        name={field.name}
        onChange={handleChange}
        value={states[field.id]}
      />
    ) : (
      <Inputs
        key={field.name}
        type={field.type}
        id={field.id}
        placeholder={field.placeholder}
        name={field.name}
        onChange={handleChange}
        value={states[field.id]}
        disable={field?.disable}
        
      />
    );
  })}
</div>
<div className="submit-part">
  <Button text="Save"classname="sbmbtn1" type="button" handleSubmit={createInEmployeeForm} />
  <Button text="Cancel" classname="sbmbtn" type="button" />
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0px 10px 0px 0px",
    }}
  >
    
  </div>
 
  
  
  
</div>
</form>
)}
export default Form;