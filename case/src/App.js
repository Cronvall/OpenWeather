import React, {useState} from 'react';
import axios from 'axios';
import Displays from './components/Displays';

function App() {
  const apiKey = "23f136362f24c932f3393c40eea8d034";
  const [locationIn, setLocationIn] = useState('');

  const [currentData, setCurrentData] = useState({});
  const [polData, setPolData] = useState({});
  const [chartData, setChartData] = useState({});

  //API URL'S
  const url = "https://api.openweathermap.org";
  const locationURL = `${url}/geo/1.0/direct?q=${locationIn}&appid=${apiKey}&limit=1&lang=sv`
  const currentDataUrl = `${url}/data/2.5/weather?q=${locationIn}&units=metric&appid=${apiKey}&lang=sv`
  

  const getData = (event) => {
    if (event.key === 'Enter') {
      //Clear Console, for sanity
      console.clear();

    //get location in form of latitude and longitude
    axios.get(locationURL).then((response) => {
      let lat = response.data[0].lat
      let lon = response.data[0].lon

      //set the data given by the currentWeather API
      axios.get(currentDataUrl).then((resp) => {
        setCurrentData(resp.data)
          console.log("CURRENT DATA", resp.data)
      });

      //set the data given by the polutionWeather API
      axios.get(`${url}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then((resp) => {
          setPolData(resp.data)
          console.log("POL DATA", resp.data)
      })

      //set the data given by the 5dayWeather API
      axios.get(`${url}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then((resp) => {
        setChartData(resp.data);
          console.log("CHART DATA", resp.data)
      })
    });

      setLocationIn('') //reset searchbar
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={locationIn}
          onChange={event => {setLocationIn(event.target.value)}}
          onKeyPress={getData}
          placeholder='Ange stad'
          type="text" />
      </div>

      <div className="container">
        <Displays 
        currentData = {currentData} 
        polData = {polData}
        chartData = {chartData}/>
      </div>
    </div>
  );
}

export default App;