import React from 'react'

const SellForm = () => {
   let categories = ["Mobiles", "Vehicles", 'Properties For Sale', 'Properties For Rent', 'Electronics & Home', 'Bikes', "Business & Industrial", 'Services', 'Jobs', 'Animal', 'Furniture & Home Decor', 'Fashion & Beauty', 'Books, Sports & Hobbies', 'Kids']
   let type = ['New', 'Used']
  return (
    <>
        <div className="signIn sellForm">
        <div className="card">
          <form action="">
             <h1 className='h1 signIn-h1'> Add Product Details</h1>
            <input type="text"  className='input signIn-input sell-input' placeholder='Enter your Product Name'/>
            <input type="number"  className='input signIn-input sell-input' placeholder='Enter your Product Price'/>
            <input type="text"  className='input signIn-input sell-input' placeholder='Enter your Product Description'/>
            <select  className='input signIn-input sell-input'>
              <option value="">Select Catogary</option>
              {
                categories.map((item,index)=>(
                  <option value="item" key={index}>{item}</option>
                ))
              }
            </select>
            <select  className='input signIn-input sell-input'>
              <option value="">Product Type</option>
              {
                type.map((item,index)=>(
                  <option value="item" key={index}>{item}</option>
                ))
              }
            </select>
            <button className='btn signIn-btn'>Add Product</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SellForm
