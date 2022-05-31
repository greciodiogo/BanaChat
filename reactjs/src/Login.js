import React from "react";
import "./Login.css";
import Picture from "./assets/banana.PNG";
import { Button } from "@material-ui/core";
// import { GoogleLogin } from 'react-google-login'
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch()

  const signIn = () => {};
    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try{
            dispatch({type:'AUTH', data:{result,token}})
        }catch(error){
            console.log(error)
        }
    }
    const googleFailure = () => {
        console.log('Google Sign In was unsuccessful. Try Again Later')
    }
  return (
    <div className="login">
      <div className="login__container">
        <img src={Picture} alt="" height="50px" width="50px" color="orange" />
        <div className="login__text">
          <h1>
            Sign in to <span>banaMedia</span>
          </h1>
        </div>
        <GoogleLogin
         clientId="Google ID"
         render={(renderProps) =>(
            <Button className="submit" type="submit" onClick={renderProps.onclick} disabled={renderProps.disabled}>
            Sign In With Google
          </Button>
         )}
         onSuccess={googleSuccess}
         onFailure={googleFailure}
         cookiePolicy="single_login_origin"
        />
       
          <Button className="keep" type="submit" onClick={signIn}>
            Keep as Guest
          </Button>
      </div>
    </div>
  );
}

export default Login;
