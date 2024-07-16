import { forwardRef } from "react";

const TextFIeld= forwardRef((props,ref) => {
    const {type,label,onChange,value,error} = props;


    return(
        <div className="inputs">
        <label htmlFor={props.id}>{label}</label>
        <input type={type} id={props.id} placeholder={label} onChange={onChange} value={value} ref={ref}></input>
        <div >{error}</div>
    </div>
    )
})
export default TextFIeld;