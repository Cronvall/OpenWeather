import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

class Doc extends React.Component{
  componentDidMount(){
    document.title = "Case - OpenWeather"
  }

  render(){
    return(
      <>
        <App />
      </>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Doc />
  </React.StrictMode>,
  document.getElementById('root')
);
