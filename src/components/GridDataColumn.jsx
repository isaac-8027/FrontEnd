import { Link, useNavigate } from "react-router-dom";
import Pen from "./pen.png";
import Delete from "./delete.png";

const GridDataColumn = ({ name, id, date, role,department, status, experiance,modalDelete }) => {
  let color;
  if (status=="Active"){
    color= "#91f756";
  }
  else if(status=="Inactive"){
    color="#ff7373";
  }
  else{
    color="#fff173";
  }

  const navigate=useNavigate();
  const handleEditClick=(e)=>{
    navigate(`edit/${id}`);
  };
  const handleDeleteClick=(e)=>{
    modalDelete(id)
  };
  
console.log(color);

      return (
        
        <div className="list-data">
          <Link to={`details`}>
          <div className="employee-name">
            {name}
          </div>
          </Link>
          <Link to={`details`}>
          <div className="employee-id">
            {id}
          </div>
          </Link>
          <Link to={`details`}>
          <div className="employee-joining-date">
            {date}
          </div>
          </Link>
          <Link to={`details`}>
          <div className="employee-role">
            {role}
          </div>
          </Link>
          <Link to={`details`}>
          <div className="employee-department">
            {department}
          </div>
          </Link>
          <Link to={`details`}>
          <div className="employee-status" >
            <div className="color-box" style={{backgroundColor:`${color}`}}>
            {status}
            
            </div>
          </div>
          </Link>
          <Link to={`details`}>
          
          <div className="employee-experiance">
            {experiance}
          </div>
          </Link>
          <div className="employee-action">

          <img src={Delete} alt="delete" className="delete" onClick={handleDeleteClick}/>

          <button className="employee-link" onClick={handleEditClick}>
          <img src={Pen} alt="pen" className="pen" />
          </button>
         


          {/* <Link to={`edit/${id}`}>Edit</Link> */}
            
          </div>
        </div>
       
        
      );
      
  };
  
  export default GridDataColumn;