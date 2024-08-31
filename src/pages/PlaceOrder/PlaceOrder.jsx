import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <form className='place-order'>
       <div className="place-order-left">
          <p className='title'>información de entrega</p>
          <div className="multi-fields">
             <input type="text" placeholder='Nombre' />
             <input type="text" placeholder='Apellido' />
          </div>
          <input type="email" placeholder='email' />
          <input type="text" placeholder='Calle' />
          <div className="multi-fields">
             <input type="text" placeholder='Ciudad' />
             <input type="text" placeholder='Localidad' />
          </div>
          <div className="multi-fields">
             <input type="text" placeholder='Código postal' />
             <input type="text" placeholder='País' />
          </div>
          <input type="text" placeholder='Celular' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Compra Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tarifa de entrega</p>
              <p>${getTotalCartAmount()===0?0:200} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+200} </b>
            </div>
          </div>
          <button onClick={()=>navigate('/checkout')}>PROCEDER AL PAGO</button>
        </div>  
        </div> 
    </form>
  )
}

export default PlaceOrder