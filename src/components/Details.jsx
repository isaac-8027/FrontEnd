const Details = ({name,data}) => {
   let color;
  if (data=="Active"){
    color= "#91f756";
  }
  else if(data=="Inactive"){
    color="#ff7373";
  }
  else if(data=="Probation"){
    color="#fff173";
  }
    return (
      <div className="details-wrap">
        <div className="details-name">
          {name}
          </div>
          
          <div className="details-data">
          <div className="color-box" style={{backgroundColor:`${color}`}}>
            <p>{data}</p>
            
            </div>
          </div>
        
        
      </div>
    );
};

export default Details;