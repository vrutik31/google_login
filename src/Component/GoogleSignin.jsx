import React from 'react'
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'   // ✅ named import for v4+

import { useNavigate } from 'react-router-dom';


const GoogleSignin = () => {

    const navigate = useNavigate();

  function handleSuccess(credentialResponse){
      console.log("you are logged in successfully",credentialResponse)
      const decode=jwtDecode(credentialResponse?.credential)
      console.log(decode);

    navigate('/home', { state: { name: decode.name } });

  }

  function handleError(){
      console.log("signin error")
  }
  return (
    <div className='flex items-center justify-center mt-8'>
      <h1 className='text-blue-500 text-2xl font-bold  rounded'>Google Sign-In</h1>

      <GoogleOAuthProvider clientId="23079804300-k00vfja35fpo2qj90cifeiqqhgg9g5i1.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default GoogleSignin
