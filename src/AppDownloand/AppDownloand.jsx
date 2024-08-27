import React from 'react'
import './AppDownloand.css'
import { assets } from '../assets/assets'

const AppDownloand = () => {
  return (
    <div className='app-downloand' id='app-downloand'>
        <p>Para una mejor experiencia descarge <br/> Comida Ya! App</p>
        <div className="app-downloand-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownloand