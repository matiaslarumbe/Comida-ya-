import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  
  const [currState,setCurrState] = useState("Login")
  
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder='nombre' required/>}
                    <input type="email" placeholder='correo electronico' required/>
                    <input type="password" placeholder='contraseña' required/>
                </div>
                <button>{currState==="Sign Up"?"Crear una cuenta":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>Al continuar, acepto los términos de uso y la política de privacidad.</p>
                </div>
                {currState==="Login"
                ?<p>Crear una nueva cuenta? <span onClick={()=>setCurrState("Sign Up")}>Haga clic aquí</span></p>
                :<p>Ya tienes una cuenta? <span onClick={()=>setCurrState("Login")}>Inicia sesión aquí</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup