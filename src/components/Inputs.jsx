const Inputs = ({ type, id, name, placeholder, value, onChange , disable=false}) => {
    return (
      <div className="inputs">
        <label htmlFor={id}>{name}:</label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disable}
          
        />
      </div>
    );
  };
  
  export default Inputs;