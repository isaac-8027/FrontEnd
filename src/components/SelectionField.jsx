const SelectionField = ({ defaulString, id, name, options, value, onChange }) => {
  return (
    <div className="inputs">
      <label htmlFor={id}>{name}:</label>
      <select name={id} value={value} id={id} aria-placeholder={name} onChange={onChange}>
      
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectionField;