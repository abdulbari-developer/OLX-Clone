import React from 'react'

const OTP = () => {
  return (
    <>
    <div className='otp'>
      <div className="card">
        <form action="">
             <h1 className='h1 signUp-h1'> OTP Verification</h1>
             <input type="number"  className='input otp-input' placeholder='Enter your 6 digit OTP'/>
             <button className='btn signIn-btn'>Verify OTP</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default OTP
