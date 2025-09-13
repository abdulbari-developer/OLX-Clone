import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className="signIn">
        <div className="card">
          <form action="">
             <h1 className='h1 signIn-h1'> Sign In</h1>
            <input type="text"  className='input signIn-input' placeholder='Enter your First name'/>
            <input type="text"  className='input signIn-input' placeholder='Enter your Last name'/>
            <input type="number"  className='input signIn-input' placeholder='Enter your Age'/>
            <input type="number"  className='input signIn-input' placeholder='Enter your Phone number'/>
            <input type="email" className='input signIn-input'  placeholder='Enter your Email'/>
            <input type="password"  className='input signIn-input' placeholder='Enter your Password'/>
            <button className='btn signIn-btn'>Sign In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
