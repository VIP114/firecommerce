import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { toast } from 'react-toastify';
import Loder from '../components/loder';

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const auth = getAuth()
  const [loading,setLoading]=useState(false)


  const login=async()=>{
    try {
      setLoading(true)
      const result= await signInWithEmailAndPassword(auth, email, password)
      console.log(result);
      localStorage.setItem('currentUser',JSON.stringify(result))
      setLoading(false)
      window.location.href='/ '
      // alert('Registration Successful')
      toast.success('Login successfully')
   
    } catch (error) {
      console.log(error);
      // alert('Registration failed: ' + error)
      toast.error('Login fail')
      setLoading(false)
      
    }
  }


  return (
    <div className='login-parent'>
      {loading && (<Loder/>)}

      <div className="login-bottom">

      </div>
      <div className="row justify-content-center">

        <div className="col-md-4 z1">
          <div className='login-form'>
            <h2>Login</h2>
            <hr />
            <input type="text" className='form-control' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" className='form-control' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            {/* <input type="text" className='form-control' placeholder='confirm password' value={password} onChange={(e)=>{setCPassword(e.target.value)}}/> */}
            <button className='btn btn-success mt-2' onClick={login}>login</button>
            <hr />
            <Link to='/register' className='textDecoration'>Click here to register</Link>
          </div>
        </div>
        <div className="col-md-5">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_yr6zz3wv.json" background="transparent" speed="1" loop autoplay></lottie-player>

        </div>
      </div>
    </div>
  )
}

export default LoginPage;
