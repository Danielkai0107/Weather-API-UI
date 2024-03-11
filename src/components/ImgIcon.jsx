import React from 'react'
import sun from '../images/icon/color/sun.png'
import cold from '../images/icon/color/cold.png'
import wind from '../images/icon/color/wind.png'
import cloud from '../images/icon/color/cloud-1.png'
import clouds from '../images/icon/color/cloud-1.png'
import cloud_sun from '../images/icon/color/cloud-2.png'
import cloud_rain from '../images/icon/color/rain-1.png'
import sun_cloud from '../images/icon/color/cloud-3.png'
import rain_2 from '../images/icon/color/rain-2.png'
import rain_3 from '../images/icon/color/rain-3.png'
import sun_cloud_rain_light from '../images/icon/color/sun-light-rain.png'
import rain_light from '../images/icon/color/light-rain.png'
import light from '../images/icon/color/light.png'
import fog from '../images/icon/color/cloudy.png'


const ImgIcon = ({ className, Wx }) => {

  if (Wx.includes('雪' || '寒')) {
    return (<img className={className} src={cold} alt="" />)
  }
  if (Wx.includes('風')) {
    return (<img className={className} src={wind} alt="" />)
  }
  if (Wx.includes('晴天')) {
    return (<img className={className} src={sun} alt="" />)
  }
  if (Wx.includes('多雲時晴')) {
    return (<img className={className} src={cloud_sun} alt="" />)
  }
  if (Wx.includes('時晴多雲')) {
    return (<img className={className} src={sun_cloud} alt="" />)
  }
  if (Wx.includes('多雲' && '雨')) {
    return (<img className={className} src={cloud_rain} alt="" />)
  }
  if (Wx.includes('雨' && '晴' && '雨' && '雷')) {
    return (<img className={className} src={sun_cloud_rain_light} alt="" />)
  }
  if (Wx.includes('雨' && '雷')) {
    return (<img className={className} src={rain_light} alt="" />)
  }
  if (Wx.includes('陰')) {
    return (<img className={className} src={cloud} alt="" />)
  }
  if (Wx.includes('陣雨')) {
    return (<img className={className} src={rain_2} alt="" />)
  }
  if (Wx.includes('雨天')) {
    return (<img className={className} src={rain_3} alt="" />)
  }
  if (Wx.includes('雷')) {
    return (<img className={className} src={light} alt="" />)
  }
  if (Wx.includes('霧')) {
    return (<img className={className} src={fog} alt="" />)
  }
  if (Wx.includes('多雲')) {
    return (<img className={className} src={clouds} alt="" />)
  }
  return (
    <img className={className} src={sun} alt="" />
  )
}

export default ImgIcon
