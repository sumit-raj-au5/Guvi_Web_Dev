import { Google } from '@mui/icons-material'
import React, { useState } from 'react'
import './index.css'

function Index() {
    const [register, setRegister] = useState(false)
  return (
    <div className='auth'>
        <div className="auth-container">
            <p>Login using any of the following services</p>
            <div className="sign-options">
                <div className="single-option">
                    <Google />
                    <p>Login with Google</p>
                </div>
            </div>
            <div className="auth-login">
                <div className="auth-login-container">
                {
                    register? (<>
                        <div className="input-field">
                            <p>Username</p>
                            <input type="text" name="register-username"/>
                        </div>
                        <div className="input-field">
                            <p>Email</p>
                            <input type="email" name="register-email"/>
                        </div>
                        <div className="input-field">
                            <p>Password</p>
                            <input type="password" name="register-password"/>
                        </div>
                        <button className='register-btn'>Register</button>
                    </>):(<>
                        <div className="input-field">
                            <p>Email</p>
                            <input type="email" name="register-email"/>
                        </div>
                        <div className="input-field">
                            <p>Password</p>
                            <input type="password" name="register-password"/>
                        </div>
                        <button className='register-btn'>Login</button>
                    </>)
                }
                <p className='login-register-text' onClick={()=>setRegister(!register)}>{register?"Login?":"Register?"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index