import React, { } from 'react'
import Navbar from '../components/Navbar'
import CityItem from '../components/CityItem'
import { city } from '../libs/city'
import Time from '../components/Time'

const Home = ({ handleCityOpen }) => {

  return (

    <article className='home'>
      <Navbar />
      <aside className='home_container'>
        <header className='home_header'>
          <section className='title'>
            <h1>WEATHER FORECAST </h1>
            <h2>TAIWAN</h2>
          </section>
          <section className='avatar'>
            <Time />
            <figure className='myself'></figure>
            <a className='figma' href="https://www.figma.com/file/DkAa0lG987eAv43Vwft8BK/Weather?type=design&node-id=0%3A1&mode=design&t=x4XKOPK4ScoOyhIM-1"></a>
          </section>
        </header>
        <section className='home_cityList'>
          {city.map((item) =>
            <CityItem
              key={item.id}
              item={item}
              handleCityOpen={handleCityOpen}
            />)}
        </section>
      </aside>
    </article>

  )
}

export default Home
