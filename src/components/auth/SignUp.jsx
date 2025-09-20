import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUP } from '../../features/auth/authAction'

const SignUp = () => {
  const [data, setdata] = useState({})
  const {error,loading,product}= useSelector((state)=> state.auth)

const dispatch = useDispatch()

  const updateData = (e)=>{
    setdata({
      ...data,
      [e.target.name]:e.target.value,
    })
  }

  const submitData = (e)=>{
    e.preventDefault()
dispatch(signUP(data))
  }
  return (
    <>
      <div className="signIn">
        <div className="card">
          <form action="" onSubmit={submitData}>
             <h1 className='h1 signIn-h1'> Sign In</h1>
            <input type="text" name='firstName' className='input signIn-input' placeholder='Enter your First name'  onChange={updateData}/>
            <input type="text" name='lastName' className='input signIn-input' placeholder='Enter your Last name' onChange={updateData}/>
            <input type="number" name='age' className='input signIn-input' placeholder='Enter your Age' onChange={updateData}/>
            <input type="number" name='phone' className='input signIn-input' placeholder='Enter your Phone number' onChange={updateData}/>
            <input type="email"name='email' className='input signIn-input'  placeholder='Enter your Email' onChange={updateData}/>
            <input type="password" name='password' className='input signIn-input' placeholder='Enter your Password' onChange={updateData}/>
            <button className='btn signIn-btn' type='submit'>Sign UP</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
