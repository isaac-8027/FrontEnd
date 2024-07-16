const Button=({text,classname,type,handleSubmit})=>{
    return(
        <button type={type} className={classname} onClick={handleSubmit}>{text}</button>
    )
}
export default Button;