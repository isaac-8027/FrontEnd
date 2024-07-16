import "./createEmployee.scss";
import Inputs from "../src/components/Inputs";
import SelectionField from "../src/components/SelectionField";
import Button from "../src/components/Button";
import { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import { actionTypes } from "../src/pages/store/useReducer";
import { useNavigate } from "react-router-dom";

const CreateEmployee = ({state,dispatch}) => {
  const navigate=useNavigate();
  const employees={
    name: "",
    id: "",
    date: "",
    role: "",
    department:"",
    status: "",
    experiance: "",
    address: ""
  }
  const createEmployee = (employee) => {
    dispatch({
      type: actionTypes.ADD_EMPLOYEE,
      payload: employee,
    });
    console.log(employee);
    navigate("../");
  };
  
  


 
  return (
    <main>
      <div className="main-body">
        <section className="big-header">
          <h1>Create Employee</h1>
        </section>
        <section className="input-section">
          <Form 
          // dispatcher={dispatch}
          // state={state}
          employees={employees}
          onClickPrimary={createEmployee}
          
          >
          </Form>

        </section>
      </div>
    </main>
  );
};

export default CreateEmployee;