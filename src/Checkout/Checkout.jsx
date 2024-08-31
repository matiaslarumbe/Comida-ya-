import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

const Checkout = () => {
  const navigate = useNavigate()

  return (
    <div className='checkout'>
      <h1>¡Gracias por tu compra!</h1>
      <p>Tu pedido ha sido recibido y está en proceso. Pronto recibirás un correo electrónico con los detalles de tu compra.</p>
      <button className='checkout-button' onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  )
}

export default Checkout