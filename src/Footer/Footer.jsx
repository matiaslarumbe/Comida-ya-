import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum iure unde in ipsa explicabo eaque beatae vitae, repudiandae atque exercitationem enim minima voluptates error animi. Pariatur adipisci quisquam atque.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANIA</h2>
                <ul>
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Delivery</li>
                    <li>Política de privacidad</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>CONTACTO</h2>
                <ul>
                    <li>+54-15-0101-0202</li>
                    <li>contacto@comidaya.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyrigth">Copyrigth 2024 © Comida-ya.com - All Rigth Reserved.</p>
    </div>
  )
}

export default Footer
