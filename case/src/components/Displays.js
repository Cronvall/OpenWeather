import React from "react";
import DataDisp from "./DataDisp";
import HeadDisp from "./HeadDisp";
import PolDataDisp from "./PolDataDisp";
import DayTable from "./DayTable";

const Displays = (props) =>{

    return(
        <>
            {props.currentData.main ? 
            <>

                <HeadDisp inData = {props.currentData}/>
                <DataDisp inData = {props.currentData}/>
                <PolDataDisp inData = {props.polData}/>
                <DayTable inData = {props.timeData}/>
            </>:
                <>
                    <h2>Ange en stad <br/> i sökrutan</h2>
                </>
            }
        </>
    );
}

export default Displays