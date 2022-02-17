import React, { useState, useEffect } from "react";
 
const PolDataDisp = (props) =>{

    const inData = props.inData;

    const aqi_txt = (aqi) =>{
        switch(aqi){
            case 1: return "Good"
            case 2: return "Fair"
            case 3: return "Moderate"
            case 4: return "Poor"
            case 5: return "Very Poor"

            default: return "Trouble reading"
        }
    }

    return(
    <>
    {inData.list ? 

    <div className="air">
        <h2>Air Quality</h2> 
        <p>{aqi_txt(inData.list[0].main.aqi)}</p>

        <div className="key-details" style={{backgroundColor: "transparent"}}>
            <div>
                {inData.list[0].components ? 
                <p className='bold'>{inData.list[0].components.no2}</p> : null}

                <p>NO<sub>2</sub></p>
            </div>
            
            <div>
                {inData.list[0].components ? 
                <p className='bold'>{inData.list[0].components.pm10}</p> : null}

                <p>PM<sub>10</sub></p>
            </div>

            <div>
                {inData.list[0].components ? 
                <p className='bold'>{inData.list[0].components.o3}</p> : null}

                <p>O<sub>3</sub></p>
            </div>
        </div>

            <p className="unit">μg/m<sup>3</sup></p>
    </div>
    
    :<></>}   
    </>);
}

export default PolDataDisp