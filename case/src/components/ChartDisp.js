import React, { useEffect } from "react";
import LineChart from './charts/LineChart'
import '../index.css'

const ChartDisp = (props) =>{

  const inData = props.inData;
  return(
    <>
    {inData.list ? 

    <>
      <div className="chartContainer">
        <LineChart dataPoints={inData.list}/> 
      </div>
    </>
    

    : <></>}
    
    </>
  );
}

export default ChartDisp