import React from 'react';

const HeadDisp = (props) =>{

    return(
        <div className="top">
          <div className="location">
            <p>{props.inData.name}, {props.inData.sys.country}</p>
          </div>
          <div className="temp">
            {props.inData.main ? 
            <>
            <h1> {props.inData.main.temp.toFixed()}°C </h1> 
            <h2>{props.inData.main.temp_min.toFixed()} - {props.inData.main.temp_max.toFixed()} °C </h2>
            </>
            : null}
          <h2>{props.inData.weather[0].description}</h2>
          </div>
        </div>
    );
}

export default HeadDisp