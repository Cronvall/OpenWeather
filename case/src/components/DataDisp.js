import React from 'react';

const DataDisp = (props) => {

    const inData = props.inData;
    return(
        <>
          {inData.name !== undefined &&
          <div className="key-details">
            <div className="feels">
              {inData.main ? <p className='bold'>
                {Math.round(inData.main.feels_like)}°C</p>
                 : null}
              <p>Känns som</p>
            </div>
            <div className="humidity">
              {inData.main ? <p className='bold'>{inData.main.humidity}%</p> : null}
              <p>Luft Fuktighet</p>
            </div>
            <div className="wind">
              {inData.wind ? <p className='bold'>{inData.wind.speed.toFixed()} m/s</p> : null}
              <p>Vind</p>
            </div>
          </div>
        }
        </>
    );
}

export default DataDisp