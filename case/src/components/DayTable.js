import React from "react";

const DayTable = (props) =>{

    let rawData = props.inData.list
    let today = new Date()
    const date = today.getDay()


    const todayToTxt = (weekDayNr) =>{
        console.log("JAG GLUM", weekDayNr)
        switch(weekDayNr % 6){
            case 1: return "Måndag"
            case 2: return "Tisdag"
            case 3: return "Onsdag"
            case 4: return "Torsdag"
            case 5: return "Fredag"
            case 6: return "Lördag"
            case 0: return "Söndag"

            default: return "Trouble reading"
        }
    }

    return(
        <>
        {rawData ?
        <>
        <div className="key-details">
            <div>
                <h2>{Math.round(rawData[7].main.temp)} °C</h2>
                <p>{todayToTxt(date +1)}</p>
            </div>
            <div>
                <h2>{Math.round(rawData[15].main.temp)} °C</h2> 
                <p>{todayToTxt(date +2)}</p> 
            </div>
            <div>
                <h2>{Math.round(rawData[23].main.temp)} °C</h2>
                <p>{todayToTxt(date +3)}</p> 
            </div>
        </div>
        </>
        : null}
        </>
    );
}

export default DayTable