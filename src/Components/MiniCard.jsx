import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

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
    <div className='glassCard p-4 flex flex-col'>
      <p className='text-center font-bold mb-2'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='flex justify-center items-center'>
        <img src={icon} alt="forecast not available" className='w-16 h-16' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard
