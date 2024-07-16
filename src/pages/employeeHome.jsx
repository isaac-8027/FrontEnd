import {Link, useNavigate} from "react-router-dom";
import "./employeeHome.scss"
import GridColumn from "../components/GridColumn";
import GridDataColumn from "../components/GridDataColumn";
import ModalDelete from "../components/ModalDelete";
import { useEffect, useState } from "react";
import { actionTypes } from "./store/useReducer";




const EmployeeHome=({state,dispatch})=>{

    const columns = [
        {
            name: "Employee Name",
            
        },
        {
            name: "Employee ID",
            
        },
        {
            name: "Joining Date",
            
        },
        {
            name: "Role",
            
        },
        {
            name: "Department",
            
        },
        {
            name: "Status",
          
        },
        {
            name: "Experiance",
          
        },
        {
            name: "Action",
          
        },
    ];

   


    const [deleteModal,setDeleteModal]=useState(false);
    const [args,setArgs]=useState();
    
console.log("Status: ", JSON.stringify(state))
const deleteEmployee=(id)=>{
    setArgs(id)
    setDeleteModal(true)
};




// const onCancelClick=()=>toggleDelete('');
// const onRowClick=()=>Navigate('/employee/details');
// const onEditClick=(id,event)=>{
//     event.stopPropagation();
//     Navigate(`/employee/edit/${id[0]}`)
// }




    return(
    <div className="list-wrapper">
         {deleteModal && <ModalDelete state={state} deleteModal={setDeleteModal} employeeID={args} dispatcher={dispatch}/>}
        <div className="list-header">
            <div className="left-heading">
            <h1>Employee List</h1>    
            </div>
            <div className="right-heading">
            <Link to={`create`}>
            <button className="create-employee-button">
                <div className="plus-button">
                <h1>+</h1>
                </div>
                <div className="text-button">
                <h1>Create Employee</h1>    
            </div>
            </button>
            </Link>
            </div>

        </div>
        <div className="list-bottom">
            <div className="columnwise">
           
            {columns.map((column)=>{
                    return <GridColumn key={column.name} name={column.name}/>
                })}
                </div>

            {state.employees.map((employee) => {
                return (
            <GridDataColumn
              key={employee.id}
              name={employee.name}
              id={employee.id}
              date={employee.date}
              role={employee.role}
              department={employee.department}
              status={employee.status}
              experiance={employee.experiance}
              action={employee.action}
              modalDelete={deleteEmployee}
            />
          );
        })}

        </div>

    </div>
    )
}
export default EmployeeHome;
