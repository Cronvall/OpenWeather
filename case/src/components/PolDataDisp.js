import React from "react";
 
const PolDataDisp = (props) =>{

    const inData = props.inData;

    const aqi_txt = (aqi) =>{
        switch(aqi){
            case 1: return "Väldigt Bra"
            case 2: return "Bra"
            case 3: return "Måttlig"
            case 4: return "Dålig"
            case 5: return "Väldigt Dålig"

            default: return "Trouble reading"
        }
    }

    return(
    <>
    {props.inData.list ? 

    <div className="air">
        <h2>Luft Kvalité</h2> 
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

            <p className="unit">(μg/m<sup>3</sup>)</p>
    </div>
    
    :null}   
    </>);
}

export default PolDataDisp