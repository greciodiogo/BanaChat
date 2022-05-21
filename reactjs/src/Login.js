import React from 'react'
import './Login.css'
import Picture from './assets/wtts.png'
import { Button } from '@material-ui/core'
function Login() {
    const signIn = () => {

    }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src={Picture} alt=""/>
        <div className='login__text'>
            <h1>Sign in to banaMedia</h1>
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In With Google
        </Button>

        </div>
    </div>
  )
}

export default Login
