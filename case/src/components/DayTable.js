import React from "react";

const DayTable = (props) =>{

    let rawData = props.inData.list
    let today = new Date()
    const date = today.getDay()


    const todayToTxt = (weekDayNr) =>{
        switch(weekDayNr % 7){
            case 1: return "Mån"
            case 2: return "Tis"
            case 3: return "Ons"
            case 4: return "Tor"
            case 5: return "Fre"
            case 6: return "Lör"
            case 0: return "Sön"

            default: return "Trouble reading"
        }
    }

    const selectIcon = (context) =>{
        const url =`http://openweathermap.org/img/wn/${context}@2x.png`
        if(url.includes("n@2x")){
            console.log(url)
        }
        return url
    }
 
    return(
        <>
        {rawData ?
        <>
        <div className="key-details dayTable">
            <div>
                <h2>{Math.round(rawData[0].main.temp)} °C</h2>
                <img alt={"icon"}src={selectIcon(rawData[0].weather[0].icon)}/>
                <p>Idag</p>
            </div>
            <div>
                <h2>{Math.round(rawData[8].main.temp)} °C</h2>
                <img alt={"icon"}src={selectIcon(rawData[8].weather[0].icon)}/>

                <p>{todayToTxt(date +1)}</p>
            </div>
            <div>
                <h2>{Math.round(rawData[16].main.temp)} °C</h2> 
                <img alt={"icon"}src={selectIcon(rawData[16].weather[0].icon)}/>

                <p>{todayToTxt(date +2)}</p> 
            </div>
            <div>
                <h2>{Math.round(rawData[24].main.temp)} °C</h2>
                <img alt={"icon"}src={selectIcon(rawData[24].weather[0].icon)}/>

                <p>{todayToTxt(date +3)}</p> 
            </div>
        </div>
        </>
        : null}
        </>
    );
}

export default DayTable