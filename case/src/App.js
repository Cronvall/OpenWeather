import React, {useState} from 'react';
import axios from 'axios';
import DataDisp from './components/DataDisp';
import HeadDisp from './components/HeadDisp';
import PolDataDisp from './components/PolDataDisp';
import ChartDisp from './components/ChartDisp';

function App() {
  const apiKey = "23f136362f24c932f3393c40eea8d034";
  const [locationIn, setLocationIn] = useState('');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const [currentData, setCurrentData] = useState({});
  const [polData, setPolData] = useState({});
  const [chartData, setChartData] = useState({});

  //API URL'S
  const locationURL = `https://api.openweathermap.org/geo/1.0/direct?q=${locationIn}&appid=${apiKey}&limit=1&lang=sv`
  const currentDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationIn}&units=metric&appid=${apiKey}&lang=sv`
  const polDataUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  const chartDataUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=23f136362f24c932f3393c40eea8d034&units=metric`

  const getData = (event) => {
    if (event.key === 'Enter') {

      //Clear Console, for sanity
      console.clear();

      //get location in form of latitude and longitude
      axios.get(locationURL).then((response) => {
        setLat(response.data[0].lat)
        setLon(response.data[0].lon)
        console.log("LOCATION READ:", response.data[0])
      });

      //set the data given by the currentWeather API
      axios.get(currentDataUrl).then((response) => {
        setCurrentData(response.data)
        console.log("DATA READ:", response.data)
      });

      //set the data given by the polutionWeather API
      axios.get(polDataUrl).then((response) => {
          setPolData(response.data)
          console.log("POL-DATA READ:", response.data)
      })

      //set the data given by the 5dayWeather API
      axios.get(chartDataUrl).then((response) => {
        setChartData(response.data);
        console.log("CHART DATA: ", response.data);
      })

    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={locationIn}
          onChange={event => setLocationIn(event.target.value)}
          onKeyPress={getData}
          placeholder='Ange plats'
          type="text" />
      </div>
      <div className="container">
        <HeadDisp inData = {currentData}/>
        <DataDisp inData = {currentData}/>
        <PolDataDisp inData = {polData}/>
        <ChartDisp inData = {chartData}/>
      </div>
    </div>
  );
}

export default App;