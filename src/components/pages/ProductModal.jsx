import React from 'react'
import Categories from './Categories'
import { Link } from 'react-router-dom'
import Chat from './Chat'
Chat
const ProductModal = ({product,onClose}) => {
  return (
    <div className='modal'>

     <div className="modal-container">

      <div className="modal-left">
       <img src={product.img} alt="" />
      </div>  
      <div className="modal-right">
        <p className='modal-closer' onClick={onClose}>❌</p>
        <h1 className='modal-h1'>{product.title}</h1>
        <p className='modal-price'>Price : {product.price}pkr</p>
        <p className="modal-desc">{product.description}</p>
        <p className="modal-location">{product.location}</p>
        <p className="modal-time">{product.date}</p>
        <Link className='modal-btn chat-btn' to='/Chat'>Chat</Link>
      </div>
     </div> 
    </div>
  )
}

export default ProductModal
