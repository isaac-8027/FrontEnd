import Logo from "./kv-logo.png";
import Icon from "./icon.svg"
import NavigationButtons from "../components/NavigationButtons";

import {Outlet} from "react-router-dom";
const HomeLayout=()=>{

    return (<main>


        <div className="main2">
        <header className="topbar">
        <img src={Logo} alt="kv-logo"></img>
        </header> 
        <div className="main-wrap">
        <div className="left">
{/*             
                <NavigationButtons
            image={Icon}
            name="Create Employee"
            tag="create-button"
            navigate="create"
            /> */}
             {/* <NavigationButtons
            image={Icon}
            name=" Edit Employee"
            tag="edit-button"
            navigate="edit"
            /> */}
            <NavigationButtons
            image={Icon}
            name=" Employee List"
            tag="list-button"
            navigate=""
            />
             <NavigationButtons
            image={Icon}
            name=" Logout"
            tag="out-button"
            navigate="/"
            />
            

            
        </div>

        
        <div className="right">
            
            <div className="input-section">
            <div className="page">
                <div className="header"></div>

                <div className="content"><Outlet/></div>
            </div>
            </div>
        </div>



        </div>

        </div>

        </main>


      
    )
}
export default HomeLayout
{/* */}