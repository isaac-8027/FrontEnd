import "./employeeDetails.scss"
import Details from "../components/Details"
const EmployeeDetails=()=>{
    const columns = [
        {
            name: "Employee Name",
            data: "Isaac"
            
        },
        {
            name: "Employee ID",
            data: "454545"

            
        },
        {
            name: "Joining Date",
            data: "12-06-23",
            
        },
        {
            name: "role",
            data: "Developer"
            
        },
        {
            name: "Department",
            data: "FrontEnd"
            
        },
        {
            name: "Status",
            data: "Inactive"
          
        },
        {
            name: "Experiance",
            data: "2 years"
          
        },
        {
            name: "Address",
            data: "Ernakulam Kozhikode Kollam Muvattupuzha Thrissur"
          
        },
    ];
   







    return(
    <div className="details-wrapper">
        <div className="details-header"><h1>Employee Details</h1>    
        </div>
        <div className="details-bottom">
        <div className="details-columnwise" >
        {columns.map((column) => {
                return (
            <Details
            name={column.name}
            data={column.data}
            

              
            />
          );
        })}     
         </div>
        </div>

    </div>

    )

}
export default EmployeeDetails;