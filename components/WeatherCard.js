import React from "react"

import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"


export default function WeatherCard({ name, temperature, forecast }) {

  switch (forecast) {
    case 'Sunny':
      imageSrc = sunny;
      break;
    case 'Rainy':
      imageSrc = rainy;
      break;
    case 'Snowy':
      imageSrc = rainy;
      break;
    case 'Partly cloudy':
      imageSrc = partlyCloudy;
      break;
    case 'Cloudy':
      imageSrc = cloudy;
      break;
    default:
      imageSrc = sunny;
  }

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {imageSrc} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{name}</h3>
            <h5 className="card-text">{temperature}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  )
}