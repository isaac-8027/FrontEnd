import {Link} from "react-router-dom";
const NavigationButtons=({image,tag,name,navigate})=>{
    return(
        <div className="navButtons">
            <Link to={navigate}>
            
    <button className={tag}>
    <img src={image} alt="logo"></img>{name}</button>
    </Link>
    </div>
    )
}
export default NavigationButtons;