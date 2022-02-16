import React, {useState} from 'react';
import axios from 'axios';  

function App() {

  const url = "api.openweathermap.org/data/2.5/weather?q=göteborg&units=metric&appid=23f136362f24c932f3393c40eea8d034";

  return (
    <div className='app'>
      <div className='container'>

        <div className='top'>
          <div className='location'>
            <p>Göteborg</p>
          </div>
          <div className='temp'>
            <h1>10°C</h1>
          </div>
          <div className='description'>
            Cloudy
          </div>
        </div>

        <div className='bottom'>
          <div className='feels'>
            <p>7°C</p>
          </div>
          <div className='humidity'>

          </div>
          <div className='wind'>
            4 m/s
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
