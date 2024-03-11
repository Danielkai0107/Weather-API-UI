import React from 'react'
import useDayApi from '../libs/api/useDayApi';
import ImgIcon from './ImgIcon';

const CityItem = ({ item, handleCityOpen }) => {

  const dayData = useDayApi({ location: item.locationName });
  const loaded = dayData;
  console.log(dayData);
  return (
    <ul className='cityItem' onClick={() => { handleCityOpen(item.locationName) }}>
      <img className='cityItem_bgc' src={item.image} alt="" />
      <figure className='cityItem_mask'></figure>
      <li className='content'>
        <section className='title'>
          <h5>{item.title}</h5>
          <p>{item.subtitle}</p>
        </section>
        <ImgIcon className={"city_main_image"} Wx={`${loaded && dayData[0].parameterName}`} />
      </li>
    </ul>
  )
}

export default CityItem
