import React from 'react';

const DataDisp = (props) => {

    const inData = props.inData;
    return(
        <>
          {inData.name !== undefined &&
          <div className="key-details">

            <div className="feels">
              <p className='bold'> {Math.round(inData.main.feels_like)}°C</p>
              <p>Känns som</p>
            </div>

            <div className="humidity">
              <p className='bold'>{inData.main.humidity}%</p>
              <p>Luft Fuktighet</p>
            </div>

            <div className="wind">
              <p className='bold'>{Math.round(inData.wind.speed)} m/s</p>
              <p>Vind</p>
            </div>
          </div>
        }
        </>
    );
}

export default DataDisp