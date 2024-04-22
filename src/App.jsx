import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'

function App() {
  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  return (
    <div className='app-container'>
      <nav className='nav'>
      <div className='logo-container'>
        <h1 className='logo'>Weather Wiz</h1>
        </div>
        <div className='search-container'>
          <img src={search} alt="search" className='search-icon' />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity()
              }
            }}
            type="text"
            placeholder='Enter city name...'
            className='search-input'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className='main'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className='mini-card-container'>
          {values?.slice(1, 7).map(curr => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
