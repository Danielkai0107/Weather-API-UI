import React, { useState } from 'react'
import Home from './pages/Home'
import City from './pages/City'

const App = () => {

  const [locationName, setLocationName] = useState('')

  const [cityOpen, setCityOpen] = useState(false)

  const handleCityOpen = (item) => {
    setCityOpen(true)
    setLocationName(item)
  }
  const handleCityClose = () => {
    setCityOpen(false)
    setLocationName('')
  }

  return (
    <main>
      {cityOpen ?
        (<City handleCityClose={handleCityClose} locationName={locationName} />) :
        (<Home handleCityOpen={handleCityOpen} />)
      }
    </main>
  )
}

export default App
