import React from "react"

import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"

export default function Location({ data, setLocation, location }) {

  switch (location) {
    case 'Sunny':
      imageSrc = sunny
      break
    case 'Rainy':
      imageSrc = rainy
      break
    case 'Snowy':
      imageSrc = rainy
      break
    case 'Partly cloudy':
      imageSrc = partlyCloudy
      break
    case 'Cloudy':
      imageSrc = cloudy
      break
    default:
      imageSrc = sunny
  }

  const currentLocation = data.find((item) => item.city === location);
  console.log('current location: \n',currentLocation)

  return (
    <div className = "card">
        <h3 className="card-title">Your Location's Weather</h3>
        <div className = "img-container">
            <img className="card-img-top" src = {imageSrc} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{currentLocation ? location : "Location not found"}</h3>
            <h5 className="card-text">{currentLocation ? currentLocation.temperature : "Location not found"}</h5>
            <h5 className="card-text">{currentLocation ? currentLocation.forecast : "Location not found"}</h5>
        </div>
    </div>
  )
}