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
            <h1>4°C</h1>
          </div>
          <div className='description'>
            <h3 className='bold'>Cloud</h3>
          </div>
        </div>

        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>2°C</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>69%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>4 m/s</p>
            <p>Wind</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
