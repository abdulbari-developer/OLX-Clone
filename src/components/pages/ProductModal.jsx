import React from 'react'

const ProductModal = ({product,onClose}) => {
  return (
    <>
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
        <button className='modal-btn chat'>Chat</button>
        <button className='modal-btn buy'>Buy</button>
      </div>
     </div> 
    </>
  )
}

export default ProductModal
