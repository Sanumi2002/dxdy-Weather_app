import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])

  return (
    <div className='weather-card'>
      <div className='weather-card-content'>
        <div className='weather-info'>
          <img src={icon} alt="weather_icon" />
          <p className='temperature'>{temperature} &deg;C</p>
        </div>
        <div className='location'>{place}</div>
        <div className='time'>
          <p>{new Date().toDateString()}</p>
          <p>{time}</p>
        </div>
        <div className='additional-info'>
          <div className='info-item1'>
            <p className='font-bold'>Wind Speed</p>
            <p>{windspeed} km/h</p>
          </div>
          <div className='info-item2'>
            <p className='font-bold'>Humidity</p>
            <p>{humidity} gm/m&#179;</p>
          </div>
          <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-bold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
        </div>
        <hr className='divider' />
        <div className='conditions'>{conditions}</div>
      </div>
    </div>
  )
}

export default WeatherCard
