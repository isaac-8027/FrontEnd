// import "./styles.css";
import { useReducer, useState } from "react";
import Logo from "./assets/kv-login.jpeg"
import KvLogo from "./assets/kv-logo.png"
import Button from "./components/Button"
import TextFIeld from "./components/TextField";
import CreateEmployee from "./CreateEmployee";
import LoginPage from "./assets/login";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import NotFound from "./pages/notFound";
import HomeLayout from "./pages/homeLayout";
import EmployeeHome from "./pages/employeeHome";
import EmployeeEdit from "./pages/employeeEdit";
import EmployeeDetails from "./pages/employeeDetails";

import reducer from "./pages/store/useReducer";

const App=()=>{
  const  employeeList=[
    {
        name:"Isaac",
        id:"454545",
        date:"12-06-23",
        role:"Developer",
        department:"FrontEnd",
        status:"Active",
        experiance:"2 years",
       
    },
    {
        name:"nalin",
        id:"454546",
        date:"12-06-23",
        role:"Developer",
        department:"BackEnd",
        status:"Inactive",
        experiance:"2 years",
        
    },{
        name:"Jasim",
        id:"454547",
        date:"12-06-23",
        role:"Developer",
        department:"FrontEnd",
        status:"Active",
        experiance:"2 years",
        
    },
    {
      name:"Bensen",
      id:"454548",
      date:"15-06-23",
      role:"Developer",
      department:"BackEnd",
      status:"Inactive",
      experiance:"3 years",
      
  },
    
    
]
    // const [stateValue,setState]=useState(false)
    // const handleLogin =()=>{
    //     setState(true)
    // }
    const[state,dispatch]=useReducer(reducer,{employees:employeeList});
    const router = createBrowserRouter([
      {
        path: "/",
        element:<LoginPage/>,
        errorElement:<NotFound/>,
    
      },
      {
        path:"/employees",
        element:<HomeLayout demo="demo"/>,
        children:[{index:true,element:<EmployeeHome state={state} dispatch={dispatch}/>},
          {path:"create",element:<CreateEmployee state={state} dispatch={dispatch} />},
          {path:"edit/:id",element:<EmployeeEdit/>},
          {path:"details",element:<EmployeeDetails/>}
        ]
        }
    ]);



  return(<main className="App">
    <RouterProvider router={router}/>

  </main>
        

  )
}
export default App;