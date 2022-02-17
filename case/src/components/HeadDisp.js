import React from 'react';

const HeadDisp = (props) =>{

    return(
        <div className="top">
          <div className="location">
            <p>{props.inData.name}</p>
          </div>
          <div className="temp">
            {props.inData.main ? 
            <>
            <h1> {props.inData.main.temp.toFixed()}°C </h1> 
            <h2>{props.inData.main.temp_min.toFixed()} - {props.inData.main.temp_max.toFixed()} °C </h2>
            </>
            : null}
          </div>
        </div>
    );
}

export default HeadDisp