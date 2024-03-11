import img2 from '../images/icon/outline/sun-cloud.png'
import img3 from '../images/icon/outline/rain-little.png'
import img5 from '../images/icon/outline/sun.png'
import img6 from '../images/icon/outline/wind.png'
import img7 from '../images/icon/outline/sunrise.png'
import img8 from '../images/icon/outline/position-single.png'
import img9 from '../images/icon/outline/high-temp.png'
import img10 from '../images/icon/outline/low-temp.png'
import useWeekApi from '../libs/api/useWeekApi'
import useDayApi from '../libs/api/useDayApi'
import { city } from '../libs/city'
import Time from '../components/Time'
import DateFormate from '../components/DateFormate'
import ImgIcon from '../components/ImgIcon'
import { useState } from 'react'


const City = ({ handleCityClose, locationName }) => {

  const [cityID, setCityID] = useState(locationName)
  const currentCity = city.find((item) => item.locationName === cityID);

  const nextCity = city.find((item) => item.id === (currentCity.id % city.length) + 1);

  const weekWx = useWeekApi({ location: cityID, element: 'Wx' });
  const weekTemp = useWeekApi({ location: cityID, element: 'T' });
  const dayData = useDayApi({ location: cityID });

  const loaded = weekWx.length > 0 && weekTemp.length > 0 && dayData && locationName;

  const handleClickNext = () => {
    setCityID(nextCity.locationName)
  }


  return (
    <main className='city'>
      <img className='city_bgc' src={currentCity.image} alt="" />
      <article className='city_container'>
        <section className='city_main'>
          <ul className='city_main_search'>
            <li>
              <span className='icon--search'></span>
              <input type="text" placeholder='搜尋 ...' />
            </li>
            <span className='icon--location'></span>
          </ul>
          <ImgIcon className={"city_main_image"} Wx={`${loaded && dayData[0].parameterName}`} />
          <h1 className='city_main_temp'>
            {loaded && <p>{Math.round(dayData[4].parameterName - (dayData[4].parameterName - dayData[2].parameterName) / 2)}</p>}
            <span>℃</span></h1>
          <h2 className='city_main_days'>
            <DateFormate dateString={loaded && weekWx[0].date} />
            <Time />
          </h2>
          <span className='city_main_line'></span>
          <div className='city_main_outline'>
            <img src={img2} alt="" />
            {loaded && dayData[0].parameterName}
          </div>
          <p className='city_main_outline'>
            <img src={img3} alt="" />
            {loaded && `降雨-${dayData[1].parameterName}%`}
          </p>
          <figure className='city_main_nextBtn' onClick={handleClickNext}>
            <img src={nextCity.image} alt="" />
            <p>{nextCity.title}, 台灣</p>
            <figure className='city_main_nextBtn_mask'>
            </figure>
          </figure>
        </section>
        <section className='city_info'>
          <figure className='city_info_bgc' ></figure>
          <ul className='city_info_header'>
            <li className='selectBtn'>
              <p>今天</p>
            </li>
            <li className='avatar'>
              <p>{`${currentCity.title}, 台灣`}</p>
              <figure></figure>
              <span onClick={handleCityClose}></span>
            </li>
          </ul>
          <ul className='city_info_weekList'>
            {weekTemp.map((item, index) =>
              <li key={index}>
                <p><DateFormate dateString={item.date} /></p>
                <ImgIcon className={''} Wx={`${loaded && weekWx[index].status}`} />
                <p>{item.interval}</p>
              </li>
            )}
          </ul>
          <h1>今日天氣指標</h1>
          <ul className='city_info_highlights'>
            <li>
              <p>
                <img src={img5} alt="" />
                紫外線
              </p>
              <div className='template--1'>
                <p>12</p>
                <span>km/h</span>
              </div>
            </li>
            <li>
              <p>
                <img src={img6} alt="" />
                風速
              </p>
              <div className='template--1'>
                <p>12</p>
                <span>km/h</span>
              </div>
            </li>
            <li>
              <p>
                <img src={img7} alt="" />
                日出
              </p>
              <div className='template--1'>
                <p>6:30</p>
                <span>AM</span>
              </div>
            </li>
            <li>
              <p>
                <img src={img8} alt="" />
                氣壓
              </p>
              <div className='template--1'>
                <p>12</p>
                <span>hpa</span>
              </div>
            </li>
            <li>
              <p>
                <img src={img9} alt="" />
                最高溫度
              </p>
              <div className='template--1'>
                {loaded && <p>{dayData[4].parameterName}</p>}
                <span>℃</span>
              </div>
            </li>
            <li>
              <p>
                <img src={img10} alt="" />
                最低溫度
              </p>
              <div className='template--1'>
                {loaded && <p>{dayData[2].parameterName}</p>}
                <span>℃</span>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default City;

