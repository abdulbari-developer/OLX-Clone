import React from 'react'

const SignIn = () => {
  return (
    <>
    <div className='signUp'>
      <div className="card">
        <form action="">
        <h1 className='h1 signUp-h1'> Sign UP</h1>
           <input type="email" className='input signUp-input'  placeholder='Enter your Email'/>
            <input type="password"  className='input signUp-input' placeholder='Enter your Password'/>
            <button className='btn signIn-btn'>Sign In</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignIn
