import React from 'react'
import WeatherCard from './components/WeatherCard'
import Location from './components/Location'
import cities from './data'
import { useState } from 'react'

export default function App() {

    const [location, setLocation] = useState('Tokyo')

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                <Location location={location} setLocation={setLocation} data={cities} />
                {cities.map((city, idx) => (<WeatherCard key={idx} name={city.city} temperature={city.temperature} forecast={city.forecast} />))}
            </div>
        </>
    )
}